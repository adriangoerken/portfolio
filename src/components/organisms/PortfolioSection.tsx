import { useTranslation } from 'react-i18next';
import H2 from '../atoms/H2';
import Grid from '../atoms/Grid';
import PortfolioCard from '../molecules/PortfolioCard';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animationUtils';
import { ProjectThumbnails } from '../../config/imgUrls';
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
			<Grid className="justify-items-center auto-rows-max">
				<PortfolioCard
					imageSrc={
						ProjectThumbnails[getSupportedLanguage(i18n.language)]
							.portfolio
					}
					name="Portfolio"
					technologies={['React', 'Tailwind', 'TypeScript', 'CSS']}
					codeLink="https://github.com/adriangoerken/portfolio"
				/>
				<PortfolioCard
					imageSrc={
						ProjectThumbnails[getSupportedLanguage(i18n.language)]
							.tasks
					}
					name="TaskDoneify"
					technologies={[
						'React',
						'Tailwind',
						'JavaScript',
						'PHP',
						'MySQL',
						'CSS',
					]}
					projectLink="https://taskdoneify.pages.dev"
					codeLink="https://github.com/adriangoerken/todo-list-app"
				/>
				<PortfolioCard
					imageSrc={
						ProjectThumbnails[getSupportedLanguage(i18n.language)]
							.tools
					}
					name="ImageTools"
					technologies={['React', 'Tailwind', 'TypeScript', 'CSS']}
					projectLink="https://imagetoolsag.pages.dev"
					codeLink="https://github.com/adriangoerken/image-tools"
				/>
			</Grid>
		</section>
	);
};

export default PortfolioSection;
