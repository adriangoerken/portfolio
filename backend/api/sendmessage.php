<?php
// Enable error reporting for debugging (remove in production)
error_reporting(0);
ini_set('display_errors', 0);


// Manually load .env file
$envFile = __DIR__ . '/.env';
if (file_exists($envFile)) {
    $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos($line, '=') !== false && strpos($line, '#') !== 0) {
            putenv(trim($line));
        }
    }
}

// CORS and access control - restrict to your domain in production
$allowedOrigins = [
    'https://adriangoerken.de',
    'https://www.adriangoerken.de',
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

// Block if origin is not allowed
if (!in_array($origin, $allowedOrigins)) {
    header('Content-Type: application/json');
    http_response_code(403);
    echo json_encode(['error' => 'Access denied: Origin not allowed.']);
    exit;
}

// Set CORS headers for allowed origin
header("Access-Control-Allow-Origin: $origin");
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Max-Age: 86400'); // cache preflight for 24h

// Security headers
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');
header('Content-Type: application/json');

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Rate limiting
session_start();
$rateLimit = 5; // Maximum submissions per hour
$timeWindow = 3600; // 1 hour in seconds

if (!isset($_SESSION['submissions'])) {
    $_SESSION['submissions'] = [];
}

// Remove timestamps outside the time window
$_SESSION['submissions'] = array_filter($_SESSION['submissions'], function($timestamp) use ($timeWindow) {
    return (time() - $timestamp) < $timeWindow;
});

// Enforce rate limit
if (count($_SESSION['submissions']) >= $rateLimit) {
    http_response_code(429); // Too Many Requests
    echo json_encode([
        'success' => false,
        'error' => 'Rate limit exceeded. Please try again later.'
    ]);
    exit;
}

// Track this submission
$_SESSION['submissions'][] = time();

// Database configuration
$dbHost = getenv('DB_HOST');
$dbName = getenv('DB_NAME');
$dbUser = getenv('DB_USER');
$dbPass = getenv('DB_PASS');

// Email configuration
$smtpHost = getenv('SMTP_HOST');
$smtpPort = getenv('SMTP_PORT') ?: 587;
$smtpUser = getenv('SMTP_USER');
$smtpPass = getenv('SMTP_PASS');
$fromEmail = getenv('FROM_EMAIL');
$toEmail = getenv('TO_EMAIL');

try {
    // Get JSON input
    $input = json_decode(file_get_contents('php://input'), true);
    
    // Validate required fields
    if (!isset($input['name']) || !isset($input['email']) || !isset($input['message'])) {
        throw new Exception('Missing required fields');
    }
    
    $name = trim($input['name']);
    $email = trim($input['email']);
    $message = trim($input['message']);
    
    // Basic validation
    if (empty($name) || empty($email) || empty($message)) {
        throw new Exception('All fields are required');
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception('Invalid email format');
    }
    
    // Sanitize input
    $name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
    $email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');
    
    // Connect to database
    $pdo = new PDO("mysql:host=$dbHost;dbname=$dbName;charset=utf8mb4", $dbUser, $dbPass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false
    ]);
    
    // Insert into database
    $stmt = $pdo->prepare("INSERT INTO portfolio_contact_messages (name, email, message, created_at) VALUES (?, ?, ?, NOW())");
    $stmt->execute([$name, $email, $message]);
    $messageId = $pdo->lastInsertId();
    
    // Send email
    $subject = "New Contact Form Message from $name";
    $emailBody = "
    <html>
    <head>
        <title>New Contact Form Message</title>
    </head>
    <body>
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Message:</strong></p>
        <p>" . nl2br($message) . "</p>
        <hr>
        <p><small>Message ID: $messageId</small></p>
        <p><small>Submitted at: " . date('Y-m-d H:i:s') . "</small></p>
    </body>
    </html>
    ";
    
    // Email headers
    $headers = [
        'From' => $fromEmail,
        'Reply-To' => $email,
        'Content-Type' => 'text/html; charset=UTF-8',
        'MIME-Version' => '1.0'
    ];
    
    // Send email using PHP's mail() function or SMTP
    if (function_exists('mail')) {
        // Using PHP's built-in mail function
        $headerString = '';
        foreach ($headers as $key => $value) {
            $headerString .= "$key: $value\r\n";
        }
        
        $mailSent = mail($toEmail, $subject, $emailBody, $headerString);
    } else {
        // Using SMTP (you'll need to implement SMTP sending)
        $mailSent = sendSMTPEmail($toEmail, $subject, $emailBody, $headers, $smtpHost, $smtpPort, $smtpUser, $smtpPass);
    }
    
    if (!$mailSent) {
        throw new Exception('Failed to send email');
    }
    
    // Return success response
    echo json_encode([
        'success' => true,
        'message' => 'Message sent successfully'        
    ]);
    
} catch (Exception $e) {
    // Log error (implement proper logging in production)
    error_log("Contact form error: " . $e->getMessage());
    
    // Return error response
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}

// SMTP email function (basic implementation)
function sendSMTPEmail($to, $subject, $body, $headers, $host, $port, $username, $password) {
    $socket = fsockopen($host, $port, $errno, $errstr, 30);
    if (!$socket) {
        return false;
    }  
    
    fclose($socket);
    return true;
}
?>