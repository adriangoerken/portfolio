import { getSkillsByCategory } from '../../../config/skillsData';
import { FaCode, FaServer, FaDatabase } from 'react-icons/fa';
import SectionHeading from '../../ui/SectionHeading';
import SkillCategory from './SkillCategory';
import Tools from './Tools';

const SkillsSection = () => {
	const skillCategories = [
		{
			title: 'Frontend',
			description:
				'Entwicklung moderner, responsiver Benutzeroberflächen mit Fokus auf Zugänglichkeit und optimaler Benutzererfahrung.',
			skills: getSkillsByCategory().frontend,
			icon: <FaCode />,
		},
		{
			title: 'Backend',
			description:
				'Erstellung robuster Server-Logik und APIs zur Unterstützung komplexer Webanwendungen.',
			skills: getSkillsByCategory().backend,
			icon: <FaServer />,
		},
		{
			title: 'Datenbanken',
			description:
				'Design und Optimierung von Datenbankstrukturen für effiziente Datenspeicherung und -abruf.',
			skills: getSkillsByCategory().database,
			icon: <FaDatabase />,
		},
	];

	return (
		<div aria-labelledby="skills-heading">
			<SectionHeading id="skills-heading">Fähigkeiten</SectionHeading>

			<p className="mb-10 text-center">
				Im Laufe meiner Karriere habe ich ein breites Spektrum an
				Technologien gemeistert und setze diese ein, um skalierbare und
				wartbare Weblösungen zu entwickeln.
			</p>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{skillCategories.map((category) => (
					<SkillCategory
						key={category.title}
						title={category.title}
						description={category.description}
						skills={category.skills}
						icon={category.icon}
					/>
				))}
			</div>

			<Tools />
		</div>
	);
};

export default SkillsSection;
