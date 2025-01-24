import { useTranslation } from 'react-i18next';
import H3 from '../atoms/H3';

type ProjectCardProps = {
	imageSrc: string;
	name: string;
	technologies: string[];
	projectLink?: string;
	codeLink?: string;
};

const ProjectCard = ({
	imageSrc,
	name,
	technologies,
	projectLink = 'n/a',
	codeLink = 'n/a',
}: ProjectCardProps) => {
	const [t] = useTranslation('global');

	return (
		<div className="flex flex-col justify-between bg-elevation-300 p-4 rounded-xl">
			{/* Image, name and technologies */}
			<div>
				<img src={imageSrc} alt="Project Thumbnail" className="mb-2" />
				<H3>{name}</H3>
				<div className="flex flex-wrap gap-2 mb-4">
					{technologies.map((tech, index) => (
						<span key={index}>{tech}</span>
					))}
				</div>
			</div>
			{/* Links */}
			<div className="flex gap-6">
				{projectLink !== 'n/a' ? (
					<a
						href={projectLink}
						target="_blank"
						rel="noopener noreferrer"
						className="border-b-2 border-transparent hover:border-white transition-all ease-in-out"
					>
						{t('ProjectsSection.ProjectCard.btnProject')}
					</a>
				) : (
					''
				)}
				{codeLink !== 'n/a' ? (
					<a
						href={codeLink}
						target="_blank"
						rel="noopener noreferrer"
						className="border-b-2 border-transparent hover:border-white transition-all ease-in-out"
					>
						{t('ProjectsSection.ProjectCard.btnCode')}
					</a>
				) : (
					''
				)}
			</div>
		</div>
	);
};

export default ProjectCard;
