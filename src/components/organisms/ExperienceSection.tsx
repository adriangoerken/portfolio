import H2 from '../atoms/H2';
import H3 from '../atoms/H3';

type ExperienceSectionProps = {
	sectionExperienceRef: React.RefObject<HTMLElement>;
};

/*
Highlight your professional experience, internships, or significant freelance work
Include job titles, company names, dates, and a brief description of your responsibilities and achievements
*/
const ExperienceSection = ({
	sectionExperienceRef,
}: ExperienceSectionProps) => {
	return (
		<section ref={sectionExperienceRef}>
			<H2>Experience</H2>
			{/* 
						Experience:
						Highlight your professional experience, internships, or significant freelance work
						Include job titles, company names, dates, and a brief description of your responsibilities and achievements
					*/}
			<div>
				<H3>PHP Developer | KBU Logistik AG | Sep 2021 - Dec 2024</H3>

				<div className="text-center md:text-start flex flex-col gap-2 sm:gap-1">
					<span>
						- Developed a web application for warehouse management
						system to optimize worker navigation and inventory
						tracking.
					</span>
					<span>
						- Implemented feature improvements allowing more
						efficient menu entry creation with reduced code
						duplication.
					</span>
					<span>
						- Utilized PHP, JavaScript, Oracle PL/SQL, HTML, and CSS
						to build and enhance web application functionality.
					</span>
					<span>
						- Collaborated with small team to iteratively develop
						and maintain logistics software solution.
					</span>
				</div>
			</div>
		</section>
	);
};

export default ExperienceSection;
