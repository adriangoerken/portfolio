import H3 from '../atoms/H3';

type ProjectCardProps = {
	imageSrc: string;
	name: string;
	technologies: string[];
	projectLink: string;
	codeLink: string;
};

const ProjectCard = ({
	imageSrc,
	name,
	technologies,
	projectLink,
	codeLink,
}: ProjectCardProps) => {
	return (
		<div className="flex flex-col justify-between w-[282px] bg-elevation-300 p-4 rounded-xl">
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
				<a href={projectLink} target="_blank" rel="noopener noreferrer">
					View Project
				</a>
				<a href={codeLink} target="_blank" rel="noopener noreferrer">
					View Code
				</a>
			</div>
		</div>
	);
};

export default ProjectCard;
