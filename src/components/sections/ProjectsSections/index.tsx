import SectionHeading from '../../ui/SectionHeading';
import { projects } from '../../../config/projectsData';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
	return (
		<div aria-labelledby="projects-heading">
			<SectionHeading id="projects-heading">Projekte</SectionHeading>

			<p className="mb-10 text-center">
				Hier sind einige meiner wichtigsten Projekte, die meine
				Fähigkeiten und Erfahrungen demonstrieren.
			</p>

			<div className="grid md:grid-cols-2 gap-8">
				{projects
					.sort((a, b) =>
						a.isDemo === b.isDemo ? 0 : a.isDemo ? 1 : -1
					)
					.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
			</div>
		</div>
	);
};

export default ProjectsSection;
