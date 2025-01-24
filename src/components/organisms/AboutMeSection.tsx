import { useTranslation } from 'react-i18next';
import H2 from '../atoms/H2';

type AboutMeSectionProps = {
	sectionAboutRef: React.RefObject<HTMLElement>;
};
/*
A more detailed introduction about yourself, your background, and your journey into web development
A summary of your skills and expertise
A personal touch (e.g., hobbies, interests, or a brief story)
*/
const AboutMeSection = ({ sectionAboutRef }: AboutMeSectionProps) => {
	const [t] = useTranslation('global');

	return (
		<section ref={sectionAboutRef}>
			<H2>{t('AboutMeSection.title')}</H2>
			<div className="max-w-prose justify-self-center">
				<p className="mb-4">{t('AboutMeSection.paragraphOne')}</p>
				<p className="mb-4">{t('AboutMeSection.paragraphTwo')}</p>
				<p>{t('AboutMeSection.paragraphThree')}</p>
			</div>
		</section>
	);
};

export default AboutMeSection;
