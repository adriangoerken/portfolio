import { Suspense, lazy } from 'react';
import AnimatedSectionWrapper from '../components/layout/AnimatedSectionWrapper';
import HeroSection from '../components/sections/HeroSection';
import SummarySection from '../components/sections/SummarySection';

const ExperienceSection = lazy(
	() => import('../components/sections/ExperienceSection')
);
const SkillsSection = lazy(
	() => import('../components/sections/SkillsSection')
);
const ProjectsSection = lazy(
	() => import('../components/sections/ProjectsSections')
);
const ContactSection = lazy(
	() => import('../components/sections/ContactSection')
);

const SectionLoader = () => (
	<div className="flex justify-center items-center py-12">
		<div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
	</div>
);

const IndexPage = () => {
	return (
		<>
			<AnimatedSectionWrapper id="hero">
				<HeroSection />
			</AnimatedSectionWrapper>

			<AnimatedSectionWrapper id="summary" bgColor="elevation-100">
				<SummarySection />
			</AnimatedSectionWrapper>

			<Suspense fallback={<SectionLoader />}>
				<AnimatedSectionWrapper id="experience">
					<ExperienceSection />
				</AnimatedSectionWrapper>
			</Suspense>

			<Suspense fallback={<SectionLoader />}>
				<AnimatedSectionWrapper id="skills" bgColor="elevation-100">
					<SkillsSection />
				</AnimatedSectionWrapper>
			</Suspense>

			<Suspense fallback={<SectionLoader />}>
				<AnimatedSectionWrapper id="projects">
					<ProjectsSection />
				</AnimatedSectionWrapper>
			</Suspense>

			<Suspense fallback={<SectionLoader />}>
				<AnimatedSectionWrapper id="contact" bgColor="elevation-100">
					<ContactSection />
				</AnimatedSectionWrapper>
			</Suspense>
		</>
	);
};

export default IndexPage;
