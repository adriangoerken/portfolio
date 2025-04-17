import React, { useRef, useEffect } from 'react';
import NavButton from '../atoms/NavButton';
import useActiveSection from '../../hooks/useActiveSection';
import { useTranslation } from 'react-i18next';

type HeaderProps = {
	scrollToSection: (elementRef: React.RefObject<HTMLElement>) => void;
	setHeaderHeight: (height: number) => void;
	sectionRefs: {
		sectionHeroRef: React.RefObject<HTMLElement>;
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
	const [t] = useTranslation('global');
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

	document.title = `Adrian Goerken | ${t('Header.subTitle')}`;

	return (
		<section
			ref={sectionHeaderRef}
			className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 p-6 bg-custom-gray text-white sticky top-0 z-50"
		>
			<div className="flex flex-col items-center">
				<span className="text-2xl font-bold text-nowrap">
					Adrian Goerken
				</span>
				<span className="text-lg italic text-nowrap">
					{t('Header.subTitle')}
				</span>
			</div>
			<nav className="hidden lg:flex flex-col md:flex-row flex-wrap gap-4 justify-center mt-4 md:mt-0 md:justify-start">
				<NavButton
					text={t('Header.links.linkWelcome')}
					onClick={() => scrollToSection(sectionRefs.sectionHeroRef)}
					isActive={getButtonActive('sectionHeroRef')}
				/>
				<NavButton
					text={t('Header.links.linkPortfolio')}
					onClick={() =>
						scrollToSection(sectionRefs.sectionProjectsRef)
					}
					isActive={getButtonActive('sectionProjectsRef')}
				/>
				<NavButton
					text={t('Header.links.linkSkills')}
					onClick={() =>
						scrollToSection(sectionRefs.sectionSkillsRef)
					}
					isActive={getButtonActive('sectionSkillsRef')}
				/>
				<NavButton
					text={t('Header.links.linkContact')}
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
