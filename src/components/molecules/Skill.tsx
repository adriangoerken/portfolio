import H3 from '../atoms/H3';
import { SkillProps } from '../../lib/type';
import { useTranslation } from 'react-i18next';
import { getExperienceYears } from '../../utils/utils';

import AnimatedCard from './AnimatedCard';
import { TechIcons } from '../../config/imgUrls';
import ImageLoader from '../atoms/ImageLoader';

const Skill = ({ tech, startDate, width }: SkillProps) => {
	const [t] = useTranslation('global');
	const experience = getExperienceYears(startDate, t);

	// Convert tech name to lowercase and ensure it's a valid key
	const techKey = tech.toLowerCase().split(' ')[0] as keyof typeof TechIcons;
	console.log(techKey);

	return (
		<AnimatedCard className="w-full">
			<div className="w-full flex gap-4 items-center">
				<ImageLoader
					src={TechIcons[techKey]}
					alt={`${tech} Logo`}
					className="w-[40px] h-[40px]"
				/>
				<div className="w-full">
					<div className="flex items-center justify-between mb-2">
						<H3>{tech}</H3>
						<span>{experience}</span>
					</div>
					<div className="w-full bg-gray-700 rounded-full">
						<div
							className={`bg-blue-700 h-2.5 rounded-full ${width}`}
						></div>
					</div>
				</div>
			</div>
		</AnimatedCard>
	);
};

export default Skill;
