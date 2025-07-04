import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

type SkillBadgeProps = {
	tech: string;
	startDate: {
		year: number;
		month: number;
	};
};

const SkillBadge = ({ tech, startDate }: SkillBadgeProps) => {
	const { t } = useTranslation();
	const [yearsOfExperience, setYearsOfExperience] = useState<number>(0);

	useEffect(() => {
		const calculateExperience = () => {
			const today = new Date();
			const start = new Date(startDate.year, startDate.month - 1);
			const diffTime = today.getTime() - start.getTime();
			const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
			setYearsOfExperience(Math.max(0, parseFloat(diffYears.toFixed(1))));
		};

		calculateExperience();
	}, [startDate]);

	return (
		<div
			role="img"
			aria-label={`${tech}: ${yearsOfExperience} ${
				yearsOfExperience === 1
					? t('skills:techAriaSingular')
					: t('skills:techAriaPlural')
			}`}
			className="group relative"
		>
			<div className="flex items-center gap-2 px-4 py-2 bg-elevation-100 rounded-lg hover:bg-blue-900 transition-colors duration-300">
				<span aria-hidden="true" className="font-medium text-white">
					{tech}
				</span>
				<span
					aria-hidden="true"
					className="text-xs px-2 py-1 bg-blue-900 group-hover:bg-blue-700 text-blue-200 rounded-full transition-colors duration-300"
				>
					{yearsOfExperience}
					{yearsOfExperience === 1 ? ' Jahr' : ' Jahre'}
				</span>
			</div>
		</div>
	);
};

export default SkillBadge;
