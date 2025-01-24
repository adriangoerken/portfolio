import H1 from '../atoms/H1';
import Button from '../atoms/Button';

type HeroSectionProps = {
	sectionHeroRef: React.RefObject<HTMLElement>;
	sectionProjectsRef: React.RefObject<HTMLElement>;
	scrollToSection: (elementRef: React.RefObject<HTMLElement>) => void;
};
/*
A professional photo or a creative illustration of yourself
A brief, impactful introduction (e.g., “Hi, I'm [Your Name], a passionate web developer specializing in creating dynamic and responsive websites.”)
Call to Action (e.g., “Explore My Work” button)
*/
const HeroSection = ({
	sectionHeroRef,
	sectionProjectsRef,
	scrollToSection,
}: HeroSectionProps) => {
	return (
		<section
			ref={sectionHeroRef}
			className="flex flex-col md:flex-row justify-around"
		>
			{/* Left Column */}
			<div className="flex flex-col items-center md:items-start gap-6 md:self-center md:w-1/2">
				<H1>Nice to meet you! I'm Adrian.</H1>
				<p>
					A full-stack developer crafting modern web solutions. I
					blend technical expertise with creative problem-solving to
					build websites that stand out.
				</p>
				<Button onClick={() => scrollToSection(sectionProjectsRef)}>
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
	);
};

export default HeroSection;
