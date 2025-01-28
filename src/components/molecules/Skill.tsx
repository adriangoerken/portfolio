import H3 from '../atoms/H3';
import { SkillProps } from '../../lib/type';
import { useTranslation } from 'react-i18next';
import { getExperienceYears } from '../../utils/utils';
import Card from '../atoms/Card';

const Skill = ({ tech, startDate, width }: SkillProps) => {
	const [t] = useTranslation('global');
	const experience = getExperienceYears(startDate, t);

	return (
		<Card className="w-full flex gap-4 items-center">
			<img
				src={`src/assets/images/web_icons/${tech}.png`}
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
		</Card>
	);
};

export default Skill;
