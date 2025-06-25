import { Project } from '../../../types/project';
import { motion } from 'framer-motion';
import ProjectImage from './ProjectImage';
import ProjectDetails from './ProjectDetails';
import ProjectTechnologies from './ProjectTechnologies';
import ProjectLinks from './ProjectLinks';

type ProjectCardProps = {
	project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<motion.div
			className="bg-custom-gray rounded-lg overflow-hidden shadow-lg border border-elevation-100"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
		>
			<ProjectImage
				imageUrl={project.imageUrl}
				title={project.title}
				isDemo={project.isDemo}
			/>
			{/* Project Content */}
			<div className="p-6">
				<h3 className="text-xl font-bold mb-3 text-white">
					{project.title}
				</h3>
				<p className="text-gray-300 mb-4">{project.description}</p>

				<ProjectDetails
					problem={project.problem}
					contribution={project.contribution}
					outcomes={project.outcomes}
				/>
				<ProjectTechnologies technologies={project.technologies} />
				<ProjectLinks
					repoUrl={project.repoUrl}
					demoUrl={project.demoUrl}
				/>
			</div>
		</motion.div>
	);
};

export default ProjectCard;
