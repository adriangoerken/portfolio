import { useRef, useState } from 'react';
import Container from '../components/atoms/Container';
import Header from '../components/organisms/Header';
import HeroSection from '../components/organisms/HeroSection';
import PortfolioSection from '../components/organisms/PortfolioSection';
import SkillsSection from '../components/organisms/SkillsSection';
import ExperienceSection from '../components/organisms/ExperienceSection';
import TestimonialsSection from '../components/organisms/TestimonialsSection';
import ContactSection from '../components/organisms/ContactSection';

const IndexPage = () => {
	const [headerHeight, setHeaderHeight] = useState(0);
	const sectionHeroRef = useRef<HTMLElement>(null);
	const sectionProjectsRef = useRef<HTMLElement>(null);
	const sectionSkillsRef = useRef<HTMLElement>(null);
	const sectionExperienceRef = useRef<HTMLElement>(null);
	const sectionTestimonialsRef = useRef<HTMLElement>(null);
	const sectionContactRef = useRef<HTMLElement>(null);

	// Change section
	const scrollToSection = (
		elementRef: React.RefObject<HTMLElement>
	): void => {
		if (elementRef.current) {
			const elementPosition = elementRef.current.offsetTop - headerHeight;
			window.scrollTo({
				top: elementPosition,
				behavior: 'smooth',
			});
		}
	};
	/* TODO: 	
	4. SEO optimierung
	5. Title und Favicon
*/
	return (
		<section>
			<Container className="pt-0">
				{/* Header */}
				<Header
					scrollToSection={scrollToSection}
					setHeaderHeight={setHeaderHeight}
					sectionRefs={{
						sectionHeroRef,
						sectionProjectsRef,
						sectionSkillsRef,
						sectionExperienceRef,
						sectionTestimonialsRef,
						sectionContactRef,
					}}
				/>

				{/* Content sections */}
				<HeroSection
					sectionHeroRef={sectionHeroRef}
					sectionProjectsRef={sectionProjectsRef}
					scrollToSection={scrollToSection}
				/>
				<hr />
				<PortfolioSection sectionProjectsRef={sectionProjectsRef} />
				<hr />
				<SkillsSection sectionSkillsRef={sectionSkillsRef} />
				{/* <hr /> */}
				{/* <ExperienceSection
					sectionExperienceRef={sectionExperienceRef}
				/> */}
				{/* <hr />
				<TestimonialsSection
					sectionTestimonialsRef={sectionTestimonialsRef}
				/> */}
				<hr />
				<ContactSection sectionContactRef={sectionContactRef} />
			</Container>
		</section>
	);
};

export default IndexPage;
