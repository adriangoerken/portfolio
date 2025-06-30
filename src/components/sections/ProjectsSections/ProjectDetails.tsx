import { t } from 'i18next';

type ProjectDetailsProps = {
	problem: string;
	contribution: string;
	outcomes: string;
};

const ProjectDetails = ({
	problem,
	contribution,
	outcomes,
}: ProjectDetailsProps) => {
	return (
		<div className="mb-4 space-y-3">
			<div>
				<h4 className="text-blue-400 text-sm font-medium mb-1">
					{t('projects:projectDetails.heading1')}
				</h4>
				<p className="text-gray-300 text-sm">{problem}</p>
			</div>
			<div>
				<h4 className="text-blue-400 text-sm font-medium mb-1">
					{t('projects:projectDetails.heading2')}
				</h4>
				<p className="text-gray-300 text-sm">{contribution}</p>
			</div>
			<div>
				<h4 className="text-blue-400 text-sm font-medium mb-1">
					{t('projects:projectDetails.heading3')}
				</h4>
				<p className="text-gray-300 text-sm">{outcomes}</p>
			</div>
		</div>
	);
};

export default ProjectDetails;
