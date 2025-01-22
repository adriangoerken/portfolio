import { useRef, useState, useEffect } from 'react';
import Container from '../components/organisms/Container';
import Header from '../components/organisms/Header';
import H1 from '../components/atoms/H1';
import H2 from '../components/atoms/H2';
import H3 from '../components/atoms/H3';
import Button from '../components/atoms/Button';

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
		// minHeight: `calc(100vh - ${headerHeight}px)`,
	};

	// Change section
	const scrollToSection = (
		elementRef: React.RefObject<HTMLElement>
	): void => {
		if (elementRef.current) {
			const elementPosition = elementRef.current.offsetTop - headerHeight;
			window.scrollTo({
				top: elementPosition,
				behavior: 'smooth',
			});
		}
	};

	return (
		<section>
			<Container className="pt-0">
				{/* Header */}
				<Header
					scrollToSection={scrollToSection}
					setHeaderHeight={setHeaderHeight}
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
				<section
					ref={sectionHeroRef}
					style={sectionStyle}
					className="flex flex-col md:flex-row justify-around"
				>
					{/* Left Column */}
					<div className="flex flex-col items-center md:items-start gap-6 md:self-center md:w-1/2">
						<H1>Nice to meet you! I'm Adrian.</H1>
						<p>
							A full-stack developer crafting modern web
							solutions. I blend technical expertise with creative
							problem-solving to build websites that stand out.
						</p>
						<Button
							onClick={() => scrollToSection(sectionProjectsRef)}
							className="w-fit"
						>
							Explore My Work
						</Button>
					</div>

					{/* Right Column */}
					<div className="md:s-1/2 md:w-fit flex justify-center mt-8 md:mt-0">
						<img
							src="src/assets/images/portrait.webp"
							alt="Portrait of me sitting in front of monitors"
							className="h-64 w-64 md:h-80 md:w-80 object-cover rounded-full shadow-lg"
						/>
					</div>
				</section>

				<hr className="my-12" />

				<section ref={sectionAboutRef} style={sectionStyle}>
					<H2>About Me</H2>
					<div className="max-w-[960px] mx-auto">
						<p className="mb-4 text">
							Hi, I'm Adrian Goerken, a Full Stack Web Developer
							with 5 years of experience. My passion for web
							development comes from solving complex problems and
							creating impactful solutions that make a difference
							in people's lives.
						</p>
						<p className="mb-4">
							After gaining extensive experience developing
							warehouse management systems, I've transitioned to
							freelancing, where I build custom web solutions. My
							technical toolkit includes React, TypeScript, and
							Tailwind CSS for creating responsive user
							interfaces, while I handle server-side operations
							with PHP and MySQL, implementing secure
							authentication through JWTs.
						</p>
						<p>
							When I'm not coding, you'll find me on the soccer
							field, following football matches, or diving into a
							good book. I believe maintaining interests outside
							of tech helps bring fresh perspectives to
							problem-solving in development.
						</p>
					</div>
				</section>

				<hr className="my-12" />

				<section ref={sectionProjectsRef} style={sectionStyle}>
					<H2>Portfolio</H2>
					<div className="h-full bg-blue-300">Projects</div>
				</section>

				<hr className="my-12" />

				<section ref={sectionSkillsRef} style={sectionStyle}>
					<H2>Skills</H2>
					<div className="h-full bg-blue-400">Skills</div>
				</section>

				<hr className="my-12" />

				<section ref={sectionExperienceRef} style={sectionStyle}>
					<H2>Experience</H2>
					<div className="h-full bg-blue-500">Experience</div>
				</section>

				<hr className="my-12" />

				<section ref={sectionTestimonialsRef} style={sectionStyle}>
					<H2>What Others Say</H2>
					<div className="h-full bg-blue-600">Testimonials</div>
				</section>

				<hr className="my-12" />

				<section ref={sectionContactRef} style={sectionStyle}>
					<H2>Contact</H2>
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
