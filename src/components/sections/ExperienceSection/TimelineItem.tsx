import { t } from 'i18next';
import { Experience } from '../../../types/experience';
import { motion } from 'framer-motion';
import AchievementsList from './AchievementList';
import TechnologyBadges from './TechnologieBadges';

type TimelineItemProps = {
	experience: Experience;
	isEven: boolean;
};

const TimelineItem = ({ experience, isEven }: TimelineItemProps) => {
	return (
		<li className="flex flex-col md:flex-row items-start">
			{/* Timeline node and content alignment */}
			<motion.div
				className={`w-full md:w-1/2 mb-8 md:mb-0 ${
					isEven
						? 'md:pr-12 text-left'
						: 'md:pl-12 md:ml-auto md:text-right'
				}`}
				initial={{ opacity: 0, x: isEven ? -50 : 50 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
			>
				{/* Date badge */}
				<div className="inline-block px-4 py-2 bg-blue-900 text-blue-200 rounded-full text-sm font-medium mb-4">
					{experience.period}
				</div>

				{/* Role and company */}
				<h3 className="text-xl font-bold text-white mb-2">
					{t(experience.title)}
				</h3>
				<h4 className="text-lg font-medium text-gray-300 mb-4">
					{t(experience.company)}, {t(experience.location)}
				</h4>

				{/* Achievements */}
				<AchievementsList
					achievements={experience.achievements}
					isEven={isEven}
				/>

				{/* Technologies */}
				<TechnologyBadges
					technologies={experience.technologies}
					isEven={isEven}
				/>
			</motion.div>

			{/* Timeline node (visible only on medium screens and up) */}
			<div
				aria-hidden="true"
				className="hidden md:block absolute left-1/2 transform -translate-x-1/2"
			>
				<div className="w-6 h-6 rounded-full bg-blue-600 border-4 border-custom-gray shadow-lg"></div>
			</div>
		</li>
	);
};

export default TimelineItem;
