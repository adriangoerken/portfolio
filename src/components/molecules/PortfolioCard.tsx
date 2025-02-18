import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import H3 from '../atoms/H3';
import AnimatedCard from './AnimatedCard';
import ImageLoader from '../atoms/ImageLoader';

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
		<AnimatedCard className="w-full h-full max-w-[352px]">
			<div className="flex flex-col justify-between h-full max-w-[352px]">
				{/* Image, name and technologies */}
				<div>
					<motion.div
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.2 }}
					>
						<ImageLoader
							src={imageSrc}
							alt={`${name} project thumbnail`}
						/>
					</motion.div>
					<H3>{name}</H3>
					<div className="flex flex-wrap max-w-80 mb-4">
						{technologies.map((tech, index) => (
							<span
								key={index}
								className={`whitespace-nowrap ${
									index !== technologies.length - 1
										? 'mr-2'
										: ''
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
						<motion.a
							href={projectLink}
							target="_blank"
							rel="noopener noreferrer"
							className="border-b-2 border-transparent hover:border-white transition-all ease-in-out"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							{t('PortfolioSection.PortfolioCard.btnProject')}
						</motion.a>
					) : null}
					{codeLink !== 'n/a' ? (
						<motion.a
							href={codeLink}
							target="_blank"
							rel="noopener noreferrer"
							className="border-b-2 border-transparent hover:border-white transition-all ease-in-out"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							{t('PortfolioSection.PortfolioCard.btnCode')}
						</motion.a>
					) : null}
				</div>
			</div>
		</AnimatedCard>
	);
};

export default PortfolioCard;
