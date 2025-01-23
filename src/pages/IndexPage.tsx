import { useRef, useState } from 'react';
import Container from '../components/organisms/Container';
import Header from '../components/organisms/Header';
import H1 from '../components/atoms/H1';
import H2 from '../components/atoms/H2';
import Button from '../components/atoms/Button';
import ProjectCard from '../components/molecules/ProjectCard';
import Skill from '../components/molecules/Skill';
import Grid from '../components/molecules/Grid';
import { SkillProps } from '../lib/type';
import H3 from '../components/atoms/H3';

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

	/* 
	Skill Complexity Weighting:
		Basic understanding: 25-40%
		Comfortable in most scenarios: 50-70%
		Advanced implementation: 70-90%
		Can architect complex solutions: 90-100%
	*/
	const skills: SkillProps[] = [
		{
			tech: 'HTML5',
			startDate: { year: 2017, month: 11 },
			width: 'w-[100%]',
		},
		{
			tech: 'CSS3',
			startDate: { year: 2017, month: 11 },
			width: 'w-[90%]',
		},
		{ tech: 'PHP', startDate: { year: 2017, month: 12 }, width: 'w-[70%]' },
		{
			tech: 'MySQL',
			startDate: { year: 2017, month: 12 },
			width: 'w-[70%]',
		},
		{
			tech: 'JavaScript',
			startDate: { year: 2018, month: 1 },
			width: 'w-[80%]',
		},
		{
			tech: 'Oracle PLSQL',
			startDate: { year: 2021, month: 9 },
			width: 'w-[60%]',
		},
		{ tech: 'Sass', startDate: { year: 2024, month: 1 }, width: 'w-[70%]' },
		{
			tech: 'React',
			startDate: { year: 2024, month: 9 },
			width: 'w-[40%]',
		},
		{
			tech: 'Tailwind CSS',
			startDate: { year: 2024, month: 10 },
			width: 'w-[90%]',
		},
		{
			tech: 'TypeScript',
			startDate: { year: 2025, month: 1 },
			width: 'w-[80%]',
		},
	];

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

				<hr />

				<section ref={sectionAboutRef}>
					<H2>About Me</H2>
					<div className="max-w-prose justify-self-center">
						<p className="mb-4">
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

				<hr />

				<section ref={sectionProjectsRef}>
					<H2>Portfolio</H2>
					<Grid className="justify-items-center auto-rows-max">
						<ProjectCard
							imageSrc="https://dummyimage.com/320"
							name="TaskDonify"
							technologies={['React', 'Tailwind', 'PHP', 'MySQL']}
							projectLink="https://www.google.com/ncr"
							codeLink="https://www.google.com/ncr"
						/>
						<ProjectCard
							imageSrc="https://dummyimage.com/320"
							name="TaskDonify"
							technologies={['React', 'Tailwind', 'PHP', 'MySQL']}
							projectLink="https://www.google.com/ncr"
							codeLink="https://www.google.com/ncr"
						/>
					</Grid>
				</section>

				<hr />

				<section ref={sectionSkillsRef}>
					<H2>Skills</H2>
					<Grid>
						{skills.map((skill, index) => (
							<Skill
								key={index}
								tech={skill.tech}
								startDate={skill.startDate}
								width={skill.width}
							/>
						))}
					</Grid>
				</section>

				<hr />

				<section ref={sectionExperienceRef}>
					<H2>Experience</H2>
					{/* 
						Experience:
						Highlight your professional experience, internships, or significant freelance work
						Include job titles, company names, dates, and a brief description of your responsibilities and achievements
					*/}
					<div>
						<H3>
							PHP Developer | KBU Logistik AG | Sep 2021 - Dec
							2024
						</H3>

						<div className="text-center md:text-start flex flex-col gap-2 sm:gap-1">
							<span>
								- Developed a web application for warehouse
								management system to optimize worker navigation
								and inventory tracking.
							</span>
							<span>
								- Implemented feature improvements allowing more
								efficient menu entry creation with reduced code
								duplication.
							</span>
							<span>
								- Utilized PHP, JavaScript, Oracle PL/SQL, HTML,
								and CSS to build and enhance web application
								functionality.
							</span>
							<span>
								- Collaborated with small team to iteratively
								develop and maintain logistics software
								solution.
							</span>
						</div>
					</div>
				</section>

				<hr />

				<section ref={sectionTestimonialsRef}>
					<H2>What Others Say</H2>
					<div className="h-full bg-blue-600">Testimonials</div>
				</section>

				<hr />

				<section ref={sectionContactRef}>
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
