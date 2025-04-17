import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import H2 from '../atoms/H2';
import Grid from '../atoms/Grid';
import PortfolioCard from '../molecules/PortfolioCard';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animationUtils';
import { ProjectThumbnails } from '../../config/imgUrls';
import { projects } from '../../config/projects';
import { getSupportedLanguage } from '../../utils/utils';

type PortfolioSectionProps = {
	sectionProjectsRef: React.RefObject<HTMLElement>;
};

/*
Showcase your key projects with high-quality images or videos
Include project titles, descriptions, technologies used, and links to live demos or code repositories
Use a visually appealing layout, such as a grid or carousel
*/
const PortfolioSection = ({ sectionProjectsRef }: PortfolioSectionProps) => {
	const [t, i18n] = useTranslation('global');
	const [showDemos, setShowDemos] = useState(true);

	const filteredProjects = projects
		.filter((project) => showDemos || !project.isDemo)
		.sort((a, b) => +a.isDemo - +b.isDemo);

	return (
		<section ref={sectionProjectsRef}>
			<motion.div
				variants={fadeInUp}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
			>
				<H2>{t('PortfolioSection.title')}</H2>
			</motion.div>
			<div className="flex items-center justify-center gap-2 mb-4">
				<input
					type="checkbox"
					id="showDemos"
					checked={showDemos}
					onChange={(e) => setShowDemos(e.target.checked)}
					className="w-4 h-4 accent-blue-700 hover:cursor-pointer"
				/>
				<label
					htmlFor="showDemos"
					className="text-white hover:cursor-pointer"
				>
					{t('PortfolioSection.showDemos')}
				</label>
			</div>
			<Grid className="justify-items-center auto-rows-max">
				{filteredProjects.map((project) => (
					<PortfolioCard
						key={project.name}
						imageSrc={
							ProjectThumbnails[
								getSupportedLanguage(i18n.language)
							][project.imageSrcKey]
						}
						name={project.name}
						technologies={project.technologies}
						projectLink={project.projectLink}
						codeLink={project.codeLink}
						isDemo={project.isDemo}
					/>
				))}
			</Grid>
		</section>
	);
};

export default PortfolioSection;
