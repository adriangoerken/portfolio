import { useTranslation } from 'react-i18next';
import SectionHeading from '../../ui/SectionHeading';
import ExperienceTimeline from './ExperienceTimeline';

const ExperienceSection = () => {
	const { t } = useTranslation();

	return (
		<div aria-labelledby="experience-heading">
			<SectionHeading id="experience-heading">
				{t('experience:heading')}
			</SectionHeading>
			<ExperienceTimeline />
		</div>
	);
};

export default ExperienceSection;
