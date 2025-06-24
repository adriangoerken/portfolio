import AnimatedSectionWrapper from '../components/layout/AnimatedSectionWrapper';
import HeroSection from '../components/sections/HeroSection';
import SummarySection from '../components/sections/SummarySection';
import ExperienceSection from '../components/sections/ExperienceSection';
import SkillsSection from '../components/sections/SkillsSection';

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

			{/* 
				5. Projects Section:
				Select 3-4 of your most impressive projects
				For each project, highlight:
				Problem solved
				Your specific contribution
				Technologies used
				Outcomes/results
				Screenshot/demo
				Make links to live demos and code repositories prominent
				 */}
			{/* 
				6. Contact Section 
				Keep your current contact information
				Consider adding a simple contact form
				Highlight preferred contact method
				*/}
			{/* 
				Responsive design: Ensure perfect viewing on mobile devices as many recruiters check portfolios on phones
				
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
