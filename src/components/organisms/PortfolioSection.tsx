import { useTranslation } from 'react-i18next';
import H2 from '../atoms/H2';
import Grid from '../atoms/Grid';
import ProjectCard from '../molecules/ProjectCard';

type PortfolioSectionProps = {
	sectionProjectsRef: React.RefObject<HTMLElement>;
};

/*
Showcase your key projects with high-quality images or videos
Include project titles, descriptions, technologies used, and links to live demos or code repositories
Use a visually appealing layout, such as a grid or carousel
*/
const PortfolioSection = ({ sectionProjectsRef }: PortfolioSectionProps) => {
	const [t] = useTranslation('global');

	return (
		<section ref={sectionProjectsRef}>
			<H2>{t('PortfolioSection.title')}</H2>
			<Grid className="justify-items-center auto-rows-max">
				<ProjectCard
					imageSrc="https://dummyimage.com/320"
					name="Portfolio"
					technologies={['React', 'Tailwind', 'TypeScript', 'CSS']}
					codeLink="https://github.com/adriangoerken/portfolio"
				/>
				<ProjectCard
					imageSrc="https://dummyimage.com/320"
					name="TaskDonify"
					technologies={[
						'React',
						'Tailwind',
						'JavaScript',
						'PHP',
						'MySQL',
						'CSS',
					]}
					projectLink="https://www.google.com/ncr"
					codeLink="https://www.google.com/ncr"
				/>
			</Grid>
		</section>
	);
};

export default PortfolioSection;
