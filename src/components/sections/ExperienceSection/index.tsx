import SectionHeading from '../../ui/SectionHeading';
import { t } from 'i18next';
import ExperienceTimeline from './ExperienceTimeline';

const ExperienceSection = () => {
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
