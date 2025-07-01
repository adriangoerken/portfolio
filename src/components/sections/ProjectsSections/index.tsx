import SectionHeading from '../../ui/SectionHeading';
import { t } from 'i18next';
import { projects } from '../../../data/projectsData';
import ProjectCard from './ProjectCard';
import { useMemo } from 'react';

const ProjectsSection = () => {
	const sortedProjects = useMemo(() => {
		// Create a shallow copy to avoid mutating the original array, then sort.
		return [...projects].sort((a, b) =>
			a.isDemo === b.isDemo ? 0 : a.isDemo ? 1 : -1
		);
	}, []);

	return (
		<div aria-labelledby="projects-heading">
			<SectionHeading id="projects-heading">
				{t('projects:heading')}
			</SectionHeading>

			<p className="mb-10 text-center">{t('projects:description')}</p>

			<ul className="grid md:grid-cols-2 gap-8">
				{sortedProjects
					.sort((a, b) =>
						a.isDemo === b.isDemo ? 0 : a.isDemo ? 1 : -1
					)
					.map((project) => (
						<li key={project.id}>
							<ProjectCard project={project} />
						</li>
					))}
			</ul>
		</div>
	);
};

export default ProjectsSection;
