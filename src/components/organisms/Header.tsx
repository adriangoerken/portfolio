import React, { useRef, useEffect } from 'react';
import NavButton from '../atoms/NavButton';
import useActiveSection from '../../hooks/useActiveSection';
type HeaderProps = {
	scrollToSection: (elementRef: React.RefObject<HTMLElement>) => void;
	setHeaderHeight: (height: number) => void;
	sectionRefs: {
		sectionHeroRef: React.RefObject<HTMLElement>;
		sectionAboutRef: React.RefObject<HTMLElement>;
		sectionProjectsRef: React.RefObject<HTMLElement>;
		sectionSkillsRef: React.RefObject<HTMLElement>;
		sectionExperienceRef: React.RefObject<HTMLElement>;
		sectionTestimonialsRef: React.RefObject<HTMLElement>;
		sectionContactRef: React.RefObject<HTMLElement>;
	};
};

const Header = ({
	scrollToSection,
	setHeaderHeight,
	sectionRefs,
}: HeaderProps) => {
	const sectionHeaderRef = useRef<HTMLDivElement>(null);
	const activeSection = useActiveSection(sectionRefs);

	// Get current header height
	useEffect(() => {
		const updateHeaderHeight = () => {
			if (sectionHeaderRef.current) {
				setHeaderHeight(sectionHeaderRef.current.offsetHeight);
			}
		};

		updateHeaderHeight();
		window.addEventListener('resize', updateHeaderHeight);
		return () => window.removeEventListener('resize', updateHeaderHeight);
	}, []);

	// Set active button
	const getButtonActive = (sectionRef: keyof typeof sectionRefs) => {
		return sectionRef === activeSection;
	};

	return (
		<section
			ref={sectionHeaderRef}
			className="flex flex-col lg:flex-row items-center justify-between gap-6 py-6 bg-custom-gray text-white sticky top-0 z-999"
		>
			<div className="flex flex-col items-center">
				<span className="text-2xl font-bold text-nowrap">
					Adrian Goerken
				</span>
				<span className="text-lg italic text-nowrap">
					Web Developer
				</span>
			</div>
			<nav className="hidden lg:flex flex-col md:flex-row flex-wrap gap-4 justify-center mt-4 md:mt-0 md:justify-start">
				<NavButton
					text="Welcome"
					onClick={() => scrollToSection(sectionRefs.sectionHeroRef)}
					isActive={getButtonActive('sectionHeroRef')}
				/>
				<NavButton
					text="About Me"
					onClick={() => scrollToSection(sectionRefs.sectionAboutRef)}
					isActive={getButtonActive('sectionAboutRef')}
				/>
				<NavButton
					text="Portfolio"
					onClick={() =>
						scrollToSection(sectionRefs.sectionProjectsRef)
					}
					isActive={getButtonActive('sectionProjectsRef')}
				/>
				<NavButton
					text="Skills"
					onClick={() =>
						scrollToSection(sectionRefs.sectionSkillsRef)
					}
					isActive={getButtonActive('sectionSkillsRef')}
				/>
				<NavButton
					text="Experience"
					onClick={() =>
						scrollToSection(sectionRefs.sectionExperienceRef)
					}
					isActive={getButtonActive('sectionExperienceRef')}
				/>
				{/* <NavButton
					text="What Others Say"
					onClick={() =>
						scrollToSection(sectionRefs.sectionTestimonialsRef)
					}
					isActive={getButtonActive('sectionTestimonialsRef')}					
				/> */}
				<NavButton
					text="Contact"
					onClick={() =>
						scrollToSection(sectionRefs.sectionContactRef)
					}
					isActive={getButtonActive('sectionContactRef')}
				/>
			</nav>
		</section>
	);
};

export default Header;
