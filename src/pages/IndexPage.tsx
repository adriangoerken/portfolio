import { useRef, useState, useEffect } from 'react';
import Container from '../components/organisms/Container';
import NavButton from '../components/atoms/NavButton';
import Header from '../components/organisms/Header';
import { Section } from '../lib/type';

// Header:
// 	Your Name
// 	Professional Title (e.g., Web Developer, Full Stack Developer)
// 	Navigation Menu (scrolling links to each section)

// Hero Section:
// 	A professional photo or a creative illustration of yourself
// 	A brief, impactful introduction (e.g., “Hi, I'm [Your Name], a passionate web developer specializing in creating dynamic and responsive websites.”)
// 	Call to Action (e.g., “Explore My Work” button)

// About Me:
// 	A more detailed introduction about yourself, your background, and your journey into web development
// 	A summary of your skills and expertise
// 	A personal touch (e.g., hobbies, interests, or a brief story)

// Projects:
// 	Showcase your key projects with high-quality images or videos
// 	Include project titles, descriptions, technologies used, and links to live demos or code repositories
// 	Use a visually appealing layout, such as a grid or carousel

// Skills:
// 	List your technical skills, tools, and technologies (e.g., HTML, CSS, JavaScript, React, Node.js)
// 	Consider using icons or a skill chart to make it visually engaging

// Experience:
// 	Highlight your professional experience, internships, or significant freelance work
// 	Include job titles, company names, dates, and a brief description of your responsibilities and achievements

// Testimonials:
// 	Include quotes or feedback from clients, colleagues, or mentors
// 	Add names and positions (with permission) to add credibility

// Contact:
// 	A contact form for easy inquiries
// 	Your email address and links to your social media profiles (e.g., LinkedIn, GitHub, Twitter)

// Footer:
// 	Quick links to the main sections
// 	Copyright information
// 	A closing note or a motivational quote
// 	Feel free to customize this structure to fit your style and content. Let me know if you need help with specific sections or any other advice!

const IndexPage = () => {
	const [headerHeight, setHeaderHeight] = useState(0);
	const sectionHeroRef = useRef<HTMLElement>(null);
	const sectionAboutRef = useRef<HTMLElement>(null);
	const sectionProjectsRef = useRef<HTMLElement>(null);
	const sectionSkillsRef = useRef<HTMLElement>(null);
	const sectionExperienceRef = useRef<HTMLElement>(null);
	const sectionTestimonialsRef = useRef<HTMLElement>(null);
	const sectionContactRef = useRef<HTMLElement>(null);

	// Calculate section height by subtracting header height from viewport height
	const sectionStyle = {
		minHeight: `calc(100vh - ${headerHeight}px)`,
	};

	return (
		<section>
			<Container className="pt-0">
				{/* Header */}
				<Header
					setHeaderHeight={setHeaderHeight}
					headerHeight={headerHeight}
					sectionRefs={{
						sectionHeroRef,
						sectionAboutRef,
						sectionProjectsRef,
						sectionSkillsRef,
						sectionExperienceRef,
						sectionTestimonialsRef,
						sectionContactRef,
					}}
				/>

				{/* Content sections */}
				<section ref={sectionHeroRef} style={sectionStyle}>
					<div className="h-full bg-blue-100">Hero</div>
				</section>

				<section ref={sectionAboutRef} style={sectionStyle}>
					<div className="h-full bg-blue-200">About Me</div>
				</section>

				<section ref={sectionProjectsRef} style={sectionStyle}>
					<div className="h-full bg-blue-300">Projects</div>
				</section>

				<section ref={sectionSkillsRef} style={sectionStyle}>
					<div className="h-full bg-blue-400">Skills</div>
				</section>

				<section ref={sectionExperienceRef} style={sectionStyle}>
					<div className="h-full bg-blue-500">Experience</div>
				</section>

				<section ref={sectionTestimonialsRef} style={sectionStyle}>
					<div className="h-full bg-blue-600">Testimonials</div>
				</section>

				<section ref={sectionContactRef} style={sectionStyle}>
					<div className="h-full bg-blue-700">Contact</div>
				</section>

				<section>
					<div>Footer</div>
				</section>
			</Container>
		</section>
	);
};

export default IndexPage;
