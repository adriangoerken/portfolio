import { Experience } from '../../../types/experience';
import { t } from 'i18next';
import TimelineItem from '../../ui/TimelineItem';

const ExperienceTimeline = () => {
	const experiences: Experience[] = [
		{
			id: 1,
			period: '09/2021 – 11/2024',
			title: t('experience:experiences.1.title'),
			company: t('experience:experiences.1.company'),
			location: t('experience:experiences.1.location'),
			achievements: [
				t('experience:experiences.1.achievements.1'),
				t('experience:experiences.1.achievements.2'),
				t('experience:experiences.1.achievements.3'),
			],
			technologies: [
				'JavaScript',
				'PHP',
				'Oracle',
				'PL/SQL',
				'HTML',
				'CSS',
			],
		},
		{
			id: 2,
			period: '06/2021 – 06/2021',
			title: t('experience:experiences.2.title'),
			company: t('experience:experiences.2.company'),
			location: t('experience:experiences.2.location'),
			achievements: [
				t('experience:experiences.2.achievements.1'),
				t('experience:experiences.2.achievements.2'),
			],
			technologies: ['PHP', 'HTML', 'CSS', 'JavaScript'],
		},
		{
			id: 3,
			period: '08/2018 – 06/2021',
			title: t('experience:experiences.3.title'),
			company: t('experience:experiences.3.company'),
			location: t('experience:experiences.3.location'),
			achievements: [
				t('experience:experiences.3.achievements.1'),
				t('experience:experiences.3.achievements.2'),
				t('experience:experiences.3.achievements.3'),
			],
			technologies: [
				'HTML',
				'CSS',
				'PHP',
				'JavaScript',
				'MySQL',
				'SCRUM',
			],
		},
	];

	return (
		<div className="relative">
			{/* Vertical line */}
			<div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-600 hidden md:block"></div>

			<div className="space-y-12">
				{experiences.map((experience, index) => (
					<TimelineItem
						key={experience.id}
						experience={experience}
						isEven={index % 2 === 0}
					/>
				))}
			</div>
		</div>
	);
};

export default ExperienceTimeline;
