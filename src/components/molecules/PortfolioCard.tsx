import { useTranslation } from 'react-i18next';
import H3 from '../atoms/H3';
import Card from '../atoms/Card';

type PortfolioCardProps = {
	imageSrc: string;
	name: string;
	technologies: string[];
	projectLink?: string;
	codeLink?: string;
};

const PortfolioCard = ({
	imageSrc,
	name,
	technologies,
	projectLink = 'n/a',
	codeLink = 'n/a',
}: PortfolioCardProps) => {
	const [t] = useTranslation('global');

	return (
		<Card className="flex flex-col justify-between h-full max-w-[352px]">
			{/* Image, name and technologies */}
			<div>
				<img src={imageSrc} alt="Project Thumbnail" className="mb-2" />
				<H3>{name}</H3>
				<div className="flex flex-wrap max-w-80 mb-4">
					{technologies.map((tech, index) => (
						<span
							key={index}
							className={`whitespace-nowrap ${
								index !== technologies.length - 1 ? 'mr-2' : ''
							}`}
						>
							{tech}
						</span>
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
						{t('PortfolioSection.PortfolioCard.btnProject')}
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
						{t('PortfolioSection.PortfolioCard.btnCode')}
					</a>
				) : (
					''
				)}
			</div>
		</Card>
	);
};

export default PortfolioCard;
