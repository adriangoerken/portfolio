import { t } from 'i18next';

type ProjectImageProps = {
	imageUrl: string;
	title: string;
	isDemo: boolean;
};

const ProjectImage = ({ imageUrl, title, isDemo }: ProjectImageProps) => {
	return (
		<div className="relative h-96 bg-elevation-200 flex items-center justify-center overflow-hidden">
			{
				<img
					src={imageUrl}
					alt={`${t('projects:projectImage.alt')} ${title}`}
					className="w-full h-full object-cover"
				/>
			}

			{/* Demo Badge */}
			{isDemo && (
				<div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
					{t('projects:projectImage.badge')}
				</div>
			)}
		</div>
	);
};

export default ProjectImage;
