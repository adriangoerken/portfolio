import TimelineItem from './TimelineItem';
import { experiences } from '../../../data/experienceData';

const ExperienceTimeline = () => {
	return (
		<div className="relative">
			{/* Vertical line */}
			<div
				aria-hidden="true"
				className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-600-aaa hidden md:block"
			></div>

			<ol className="space-y-12">
				{experiences.map((experience, index) => (
					<TimelineItem
						key={experience.id}
						experience={experience}
						isEven={index % 2 === 0}
					/>
				))}
			</ol>
		</div>
	);
};

export default ExperienceTimeline;
