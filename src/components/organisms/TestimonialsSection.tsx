import { useTranslation } from 'react-i18next';
import H2 from '../atoms/H2';

type TestimonialsSectionProps = {
	sectionTestimonialsRef: React.RefObject<HTMLElement>;
};

/*
Include quotes or feedback from clients, colleagues, or mentors
Add names and positions (with permission) to add credibility
*/
const TestimonialsSection = ({
	sectionTestimonialsRef,
}: TestimonialsSectionProps) => {
	const [t] = useTranslation('global');

	return (
		<section ref={sectionTestimonialsRef}>
			<H2>{t('TestimonialsSection.title')}</H2>
		</section>
	);
};

export default TestimonialsSection;
