import Button from '../atoms/Button';
import { useTranslation } from 'react-i18next';

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
	const [t] = useTranslation('global');

	return (
		<section
			ref={sectionHeroRef}
			className="max-w-[1488px] mx-auto px-4 flex flex-col md:flex-row justify-between" // Changed justify-around to justify-between
		>
			{/* Left Column */}
			<div className="flex flex-col items-center md:items-start gap-6 md:self-center md:w-[744px] mr-4">
				{/* Explicit width */}
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center md:text-start">
					<span className="inline-block">
						{t('HeroSection.title.greeting')}
					</span>
					<span className="inline-block">
						{t('HeroSection.title.intro')}
						<span className="text-blue-700">
							{t('HeroSection.title.name')}
						</span>
					</span>
				</h1>
				<div className="flex flex-col gap-3">
					<p>{t('HeroSection.messageOne')}</p>
					<p>{t('HeroSection.messageTwo')}</p>
					<p className="italic">{t('HeroSection.messageThree')}</p>
				</div>
				<Button onClick={() => scrollToSection(sectionProjectsRef)}>
					{t('HeroSection.btnCTA')}
				</Button>
			</div>

			{/* Right Column */}
			<div className="flex justify-center items-center mt-8 md:mt-0">
				<div className="relative h-80 w-80 lg:h-96 lg:w-96">
					<img
						src="/images/portrait.jpg"
						alt={t('HeroSection.imgAlt')}
						className="object-cover object-custom-top rounded-full h-full w-full"
					/>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
