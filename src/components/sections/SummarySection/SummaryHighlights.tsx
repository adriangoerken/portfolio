import { FaCode, FaLightbulb, FaUserFriends } from 'react-icons/fa';
import HighlightCard from '../../ui/HighlightCard';

const SummaryHighlights = () => {
	const highlights = [
		{
			icon: FaLightbulb,
			color: 'text-yellow-500',
			title: 'Problem Solver',
			description: 'Kreative Lösungen für komplexe Herausforderungen',
		},
		{
			icon: FaCode,
			color: 'text-blue-500',
			title: 'Technical Expert',
			description: 'Moderne Technologien für optimale Ergebnisse',
		},
		{
			icon: FaUserFriends,
			color: 'text-green-500',
			title: 'User Focused',
			description: 'Barrierefreie und intuitive Benutzererfahrungen',
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
