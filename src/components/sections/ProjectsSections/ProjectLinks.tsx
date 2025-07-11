import { useTranslation } from 'react-i18next';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

type ProjectLinksProps = {
	repoUrl?: string;
	demoUrl?: string;
	projectTitle: string;
};

const ProjectLinks = ({
	repoUrl,
	demoUrl,
	projectTitle,
}: ProjectLinksProps) => {
	const { t } = useTranslation();

	return (
		<div className="flex gap-4 mt-4">
			{repoUrl && (
				<a
					href={repoUrl}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={`${t('projects:projectLinks.aria', {
						type: projectTitle,
					})} ${t('ariaNewTab')}`}
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
					aria-label={`${t('projects:projectLinks.aria', {
						type: projectTitle,
					})} ${t('ariaNewTab')}`}
					className="flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-600-aaa text-white rounded-md transition-colors"
				>
					<FaExternalLinkAlt />
					{t('projects:projectLinks.demo')}
				</a>
			)}
		</div>
	);
};

export default ProjectLinks;
