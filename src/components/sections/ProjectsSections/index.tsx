import SectionHeading from '../../ui/SectionHeading';
import { t } from 'i18next';
import { projects } from '../../../data/projectsData';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
	return (
		<div aria-labelledby="projects-heading">
			<SectionHeading id="projects-heading">
				{t('projects:heading')}
			</SectionHeading>

			<p className="mb-10 text-center">{t('projects:description')}</p>

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
