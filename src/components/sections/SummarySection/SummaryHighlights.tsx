import { FaCode, FaLightbulb, FaUserFriends } from 'react-icons/fa';
import HighlightCard from './HighlightCard';
import { useTranslation } from 'react-i18next';

const SummaryHighlights = () => {
	const { t } = useTranslation();

	const highlights = [
		{
			icon: FaLightbulb,
			color: 'text-yellow-500',
			title: t('summary:summaryHighlights.1.title'),
			description: t('summary:summaryHighlights.1.description'),
		},
		{
			icon: FaCode,
			color: 'text-blue-500',
			title: t('summary:summaryHighlights.2.title'),
			description: t('summary:summaryHighlights.2.description'),
		},
		{
			icon: FaUserFriends,
			color: 'text-green-500',
			title: t('summary:summaryHighlights.3.title'),
			description: t('summary:summaryHighlights.3.description'),
		},
	];

	return (
		<ul className="grid md:grid-cols-3 gap-6 mt-8">
			{highlights.map((highlight) => (
				<li key={highlight.title}>
					<HighlightCard
						icon={highlight.icon}
						color={highlight.color}
						title={highlight.title}
						description={highlight.description}
					/>
				</li>
			))}
		</ul>
	);
};

export default SummaryHighlights;
