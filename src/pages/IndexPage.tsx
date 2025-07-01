import AnimatedSectionWrapper from '../components/layout/AnimatedSectionWrapper';
import HeroSection from '../components/sections/HeroSection';
import SummarySection from '../components/sections/SummarySection';
import ExperienceSection from '../components/sections/ExperienceSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSections';
import ContactSection from '../components/sections/ContactSection';

const IndexPage = () => {
	return (
		<>
			<AnimatedSectionWrapper id="hero">
				<HeroSection />
			</AnimatedSectionWrapper>
			<AnimatedSectionWrapper id="summary" bgColor="elevation-100">
				<SummarySection />
			</AnimatedSectionWrapper>
			<AnimatedSectionWrapper id="experience">
				<ExperienceSection />
			</AnimatedSectionWrapper>
			<AnimatedSectionWrapper id="skills" bgColor="elevation-100">
				<SkillsSection />
			</AnimatedSectionWrapper>
			<AnimatedSectionWrapper id="projects">
				<ProjectsSection />
			</AnimatedSectionWrapper>
			<AnimatedSectionWrapper id="contact" bgColor="elevation-100">
				<ContactSection />
			</AnimatedSectionWrapper>

			{/* 												
				TODO: Proper image size for projects
				TODO: Simple lang switcher in nav with auto detection and saving to localStorage
				TODO: List bullets for projects on right side of timeline
				
				Scannable content: Use bullet points, headings, and short paragraphs to make content skimmable
				
				Technology integration:
				Consider adding a resume download button
				Keep the language toggle since you support multiple languages
				
				Navigation improvements:
				Consider sticky navigation with section highlights
				Add a "back to top" button for longer scrolling
				
				Performance optimization:
				Continue using your ImageLoader component for progressive loading
				Consider implementing lazy loading for project images
				 */}
		</>
	);
};

export default IndexPage;
