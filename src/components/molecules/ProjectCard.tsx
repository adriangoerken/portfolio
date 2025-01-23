import H3 from '../atoms/H3';

type ProjectCardProps = {
	imageSrc: string;
	name: string;
	technologies: string[];
	projectLink: string;
	codeLink?: string;
};

const ProjectCard = ({
	imageSrc,
	name,
	technologies,
	projectLink,
	codeLink = 'n/a',
}: ProjectCardProps) => {
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
			<div className="flex gap-6 justify-center">
				<a
					href={projectLink}
					target="_blank"
					rel="noopener noreferrer"
					className="border-b-2 border-transparent hover:border-white transition-all ease-in-out"
				>
					View Project
				</a>
				{codeLink !== 'n/a' ? (
					<a
						href={codeLink}
						target="_blank"
						rel="noopener noreferrer"
						className="border-b-2 border-transparent hover:border-white transition-all ease-in-out"
					>
						View Code
					</a>
				) : (
					''
				)}
			</div>
		</div>
	);
};

export default ProjectCard;
