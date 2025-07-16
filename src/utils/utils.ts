interface ExtendedNavigator extends Navigator {
	userLanguage?: string;
	browserLanguage?: string;
}

export const getLanguage = () => {
	const extendedNavigator = navigator as ExtendedNavigator;
	return (
		extendedNavigator.language ||
		extendedNavigator.userLanguage ||
		extendedNavigator.browserLanguage ||
		'en-US'
	);
};

export const getScrollOffset = () => {
	// Get actual navbar height dynamically
	const navbar = document.querySelector('nav');

	// Get the actual height + add a small buffer for visual spacing (10px)
	const navbarHeight = navbar
		? navbar.getBoundingClientRect().height + 10
		: 80;

	// Return the calculated height or fallback to a reasonable default
	return navbarHeight;
};

export const validateEmail = (email: string) => {
	const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	return emailRegex.test(email);
};
