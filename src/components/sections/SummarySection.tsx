import { FaLightbulb, FaCode, FaUserFriends } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';

const SummarySection = () => {
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
		<div aria-labelledby="summary-heading">
			<SectionHeading id="summary-heading">Profil</SectionHeading>

			<div className="rounded-lg">
				<p className="mb-6">
					Als Frontend-Entwickler verwandle ich komplexe Anforderungen
					in intuitive, barrierefreie Webanwendungen. Mit fundierter
					Expertise in React, TypeScript und modernen CSS-Frameworks
					entwickle ich skalierbare Lösungen, die Nutzer begeistern
					und Geschäftsziele erreichen.
				</p>

				<div className="grid md:grid-cols-3 gap-6 mt-8">
					{highlights.map((highlight) => {
						const IconComponent = highlight.icon;
						return (
							<div
								key={highlight.title}
								className="group flex flex-col items-center p-6 bg-custom-gray rounded-lg shadow-lg 
								         transition-all duration-300 ease-in-out hover:transform hover:scale-105 
								         hover:shadow-xl focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50"
								tabIndex={0}
								role="article"
								aria-label={`${highlight.title}: ${highlight.description}`}
							>
								<div
									className={`${highlight.color} text-4xl mb-4 group-hover:scale-110 transition-transform duration-300`}
								>
									<IconComponent aria-hidden="true" />
								</div>
								<h3 className="font-semibold mb-3 text-white text-center text-lg">
									{highlight.title}
								</h3>
								<p className="text-center">
									{highlight.description}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default SummarySection;
