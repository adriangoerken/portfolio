import { Experience } from '../../../types/experience';
import TimelineItem from '../../ui/TimelineItem';

const ExperienceTimeline = () => {
	const experiences: Experience[] = [
		{
			id: 1,
			period: '09/2021 – 11/2024',
			title: 'Fullstack Webentwickler',
			company: 'KBU Logistik AG',
			location: 'Bremen',
			achievements: [
				'Entwicklung einer webbasierten Anwendung auf Handterminals zur Navigation und Auftragsabwicklung im Lager, integriert mit der firmeneigenen Lagerverwaltungssoftware',
				'Entwicklung von webbasierten Dashboards zur Echtzeit-Visualisierung von Lagerdaten',
				'Entwicklung von Datenbankanwendungen in PLSQL/Oracle für das Backend',
			],
			technologies: [
				'JavaScript',
				'PHP',
				'Oracle',
				'PL/SQL',
				'HTML',
				'CSS',
				'SCSS',
			],
		},
		{
			id: 2,
			period: '06/2021 – 06/2021',
			title: 'Praktikum als Junior PHP-Entwickler',
			company: 'EARSandEYES',
			location: 'Hamburg',
			achievements: [
				'Programmierung eines Beispielblogs mit PHP, HTML, JavaScript und CSS',
				'Lösen verschiedener Programmieraufgaben in PHP zur Vertiefung meiner Kenntnisse und zur Verbesserung meiner Problemlösungsfähigkeiten',
			],
			technologies: ['PHP', 'HTML', 'CSS', 'JavaScript'],
		},
		{
			id: 3,
			period: '08/2018 – 06/2021',
			title: 'Ausbildung zum Fachinformatiker für Anwendungsentwicklung',
			company: 'Theodor-Schäfer-Berufsbildungswerk',
			location: 'Husum',
			achievements: [
				'Erwerb fundierter Kenntnisse in HTML, CSS, PHP, JavaScript und relationalen Datenbanken wie MySQL',
				'Erwerb grundlegender Kenntnisse in agiler Softwareentwicklung nach SCRUM',
				'Abschlussnote: 2,3',
			],
			technologies: [
				'HTML',
				'CSS',
				'PHP',
				'JavaScript',
				'MySQL',
				'SCRUM',
			],
		},
	];

	return (
		<div className="relative">
			{/* Vertical line */}
			<div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-600 hidden md:block"></div>

			<div className="space-y-12">
				{experiences.map((experience, index) => (
					<TimelineItem
						key={experience.id}
						experience={experience}
						isEven={index % 2 === 0}
					/>
				))}
			</div>
		</div>
	);
};

export default ExperienceTimeline;
