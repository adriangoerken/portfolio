import { useTranslation } from 'react-i18next';

type ProjectTechnologiesProps = {
	technologies: string[];
};

const ProjectTechnologies = ({ technologies }: ProjectTechnologiesProps) => {
	const { t } = useTranslation();

	return (
		<div className="mb-6">
			<h4 className="text-blue-400 text-sm font-medium mb-2">
				{t('projects:projectTechnologies.heading')}
			</h4>
			<div className="flex flex-wrap gap-2">
				{technologies.map((tech) => (
					<span
						key={tech}
						className="px-2 py-1 bg-elevation-100 text-sm rounded-md"
					>
						{tech}
					</span>
				))}
			</div>
		</div>
	);
};

export default ProjectTechnologies;
