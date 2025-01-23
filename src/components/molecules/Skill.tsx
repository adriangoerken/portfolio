import H3 from '../atoms/H3';
import { StartDate, SkillProps } from '../../lib/type';

const Skill = ({ tech, startDate, width }: SkillProps) => {
	const getExperienceYears = (startDate: StartDate) => {
		const currentDate = new Date();
		const startYear = startDate.year;
		const startMonth = startDate.month;

		const years = currentDate.getFullYear() - startYear;
		const months = currentDate.getMonth() + 1 - startMonth; // getMonth() returns 0-11

		let totalYears = years;
		let totalMonths = months;

		if (months < 0) {
			totalYears -= 1;
			totalMonths += 12;
		}

		if (totalYears < 1) {
			return '<1 Year';
		}

		return `${totalYears} Year${totalYears > 1 ? 's' : ''}`;
	};

	const experience = getExperienceYears(startDate);

	return (
		<div className="flex gap-2 items-center">
			<img
				src={`src/assets/images/web_icons/${tech}.png`}
				alt={`${tech} Logo`}
				className="w-[50px] h-[50px] bg-elevation-300 rounded-xl"
			/>
			<div>
				<div className="flex items-center justify-between w-[200px]">
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
	);
};

export default Skill;
