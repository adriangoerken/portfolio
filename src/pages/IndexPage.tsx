import { useRef, useState } from 'react';
import Container from '../components/atoms/Container';
import Header from '../components/organisms/Header';
import HeroSection from '../components/organisms/HeroSection';
import PortfolioSection from '../components/organisms/PortfolioSection';
import SkillsSection from '../components/organisms/SkillsSection';
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

	return (
		<section>
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
			<Container className="pt-0">
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
				<hr />
				<ContactSection sectionContactRef={sectionContactRef} />
			</Container>
		</section>
	);
};

export default IndexPage;
