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
		</>
	);
};

export default IndexPage;
