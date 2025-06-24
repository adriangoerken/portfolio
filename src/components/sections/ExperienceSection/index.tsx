import SectionHeading from '../../ui/SectionHeading';
import ExperienceTimeline from './ExperienceTimeline';

const ExperienceSection = () => {
	return (
		<div aria-labelledby="experience-heading">
			<SectionHeading id="experience-heading">
				Berufserfahrung
			</SectionHeading>
			<ExperienceTimeline />
		</div>
	);
};

export default ExperienceSection;
