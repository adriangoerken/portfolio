import { t } from 'i18next';
import { FaCode, FaLightbulb, FaUserFriends } from 'react-icons/fa';
import HighlightCard from '../../ui/HighlightCard';

const SummaryHighlights = () => {
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
		<div className="grid md:grid-cols-3 gap-6 mt-8">
			{highlights.map((highlight) => (
				<HighlightCard
					key={highlight.title}
					icon={highlight.icon}
					color={highlight.color}
					title={highlight.title}
					description={highlight.description}
				/>
			))}
		</div>
	);
};

export default SummaryHighlights;
