import Button from '../atoms/Button';
import { Trans, useTranslation } from 'react-i18next';

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
			className="flex flex-col md:flex-row justify-around"
		>
			{/* Left Column */}
			<div className="flex flex-col items-center md:items-start gap-6 md:self-center md:w-1/2">
				<h1 className="text-[40px] md:text-[50px] lg:text-[60px] font-bold tracking-tight text-center md:text-start">
					<Trans i18nKey="HeroSection.title">
						Nice to meet you! I'm
						<span className="text-blue-700"> Adrian.</span>
					</Trans>
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
			<div className="md:s-1/2 flex justify-center items-center mt-8 md:mt-0">
				<img
					src="src/assets/images/portrait.webp"
					alt={t('HeroSection.imgAlt')}
					className="h-80 lg:h-96 w-80 lg:w-96 object-cover rounded-full shadow-lg"
				/>
			</div>
		</section>
	);
};

export default HeroSection;
