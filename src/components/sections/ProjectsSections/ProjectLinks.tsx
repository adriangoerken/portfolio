import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { t } from 'i18next';

type ProjectLinksProps = {
	repoUrl?: string;
	demoUrl?: string;
};

const ProjectLinks = ({ repoUrl, demoUrl }: ProjectLinksProps) => {
	return (
		<div className="flex gap-4 mt-4">
			{repoUrl && (
				<a
					href={repoUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors"
				>
					<FaGithub />
					{t('projects:projectLinks.code')}
				</a>
			)}
			{demoUrl && (
				<a
					href={demoUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-md transition-colors"
				>
					<FaExternalLinkAlt />
					{t('projects:projectLinks.demo')}
				</a>
			)}
		</div>
	);
};

export default ProjectLinks;
