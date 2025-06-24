import { Experience } from '../../types/experience';
import { motion } from 'framer-motion';

type TimelineItemProps = {
	experience: Experience;
	isEven: boolean;
};

const TimelineItem = ({ experience, isEven }: TimelineItemProps) => {
	return (
		<div className="flex flex-col md:flex-row items-start">
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
					{experience.title}
				</h3>
				<h4 className="text-lg font-medium text-gray-300 mb-4">
					{experience.company}, {experience.location}
				</h4>

				{/* Achievements */}
				<ul
					className={`list-disc ml-5 mb-4 text-gray-300 space-y-2 ${
						!isEven && 'md:ml-auto md:mr-5 md:text-right'
					}`}
				>
					{experience.achievements.map((achievement, index) => (
						<li
							key={index}
							className={`${!isEven && 'md:list-none'}`}
						>
							{achievement}
						</li>
					))}
				</ul>

				{/* Technologies */}
				<div
					className={`flex flex-wrap gap-2 ${
						!isEven && 'md:justify-end'
					}`}
				>
					{experience.technologies.map((tech, index) => (
						<span
							key={index}
							className="px-3 py-1 bg-elevation-100 text-white text-sm rounded-full"
						>
							{tech}
						</span>
					))}
				</div>
			</motion.div>

			{/* Timeline node (visible only on medium screens and up) */}
			<div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
				<div className="w-6 h-6 rounded-full bg-blue-600 border-4 border-custom-gray shadow-lg"></div>
			</div>
		</div>
	);
};

export default TimelineItem;
