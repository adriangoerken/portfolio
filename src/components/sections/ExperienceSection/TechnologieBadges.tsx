import { useTranslation } from 'react-i18next';

type TechnologyBadgesProps = {
	technologies: string[];
	isEven: boolean;
};

const TechnologyBadges = ({ technologies, isEven }: TechnologyBadgesProps) => {
	const { t } = useTranslation();

	return (
		<>
			<h5 className="sr-only">{t('experience:techHeading')}</h5>
			<div
				className={`flex flex-wrap gap-2 ${
					!isEven && 'md:justify-end'
				}`}
			>
				{technologies.map((tech) => (
					<span
						key={tech}
						className="px-3 py-1 bg-elevation-100 text-white text-sm rounded-full"
					>
						{tech}
					</span>
				))}
			</div>
		</>
	);
};

export default TechnologyBadges;
