import { t } from 'i18next';

type AchievementsListProps = {
	achievements: string[];
	isEven: boolean;
};

const AchievementsList = ({ achievements, isEven }: AchievementsListProps) => {
	return (
		<>
			<h5 className="sr-only">{t('experience:achievementsHeading')}</h5>
			<ul
				className={`list-disc ml-5 mb-4 text-gray-300 space-y-2 ${
					!isEven && 'md:ml-auto md:mr-5 md:text-right'
				}`}
			>
				{achievements.map((achievement) => (
					<li key={achievement} className="md:list-none">
						{t(achievement)}
					</li>
				))}
			</ul>
		</>
	);
};

export default AchievementsList;
