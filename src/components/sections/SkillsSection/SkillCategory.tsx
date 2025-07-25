import { motion } from 'framer-motion';
import SkillBadge from './SkillBadge';

type Skill = {
	tech: string;
	startDate: {
		year: number;
		month: number;
	};
};

type SkillCategoryProps = {
	title: string;
	description: string;
	skills: Skill[];
	icon: React.ReactNode;
};

const SkillCategory = ({
	title,
	description,
	skills,
	icon,
}: SkillCategoryProps) => {
	return (
		<motion.div
			className="bg-custom-gray rounded-lg p-6 shadow-lg"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
		>
			<div className="flex items-center gap-3 mb-4">
				<div aria-hidden="true" className="text-blue-500 text-xl">
					{icon}
				</div>
				<h3 className="text-xl font-semibold text-white">{title}</h3>
			</div>

			<p className="text-gray-300 mb-6">{description}</p>

			<ul className="flex flex-wrap gap-3">
				{skills.map((skill) => (
					<li key={skill.tech}>
						<SkillBadge
							tech={skill.tech}
							startDate={skill.startDate}
						/>
					</li>
				))}
			</ul>
		</motion.div>
	);
};

export default SkillCategory;
