import { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Container from '../layout/Container';
import NavBrand from './NavBrand';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import useActiveSection from '../../hooks/useActiveSection';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();
	const isHomepage = location.pathname === '/';
	const navRef = useRef<HTMLElement>(null);

	const navLinks = [
		{ name: t('navbar:navLinks.home'), href: '#hero' },
		{ name: t('navbar:navLinks.profile'), href: '#summary' },
		{ name: t('navbar:navLinks.experience'), href: '#experience' },
		{ name: t('navbar:navLinks.skills'), href: '#skills' },
		{ name: t('navbar:navLinks.projects'), href: '#projects' },
		{ name: t('navbar:navLinks.contact'), href: '#contact' },
	];

	// Section highlighting in the nav except for hero section
	const { activeSection, handleSmoothScroll } = useActiveSection(
		navLinks,
		isHomepage
	);

	// Handler for brand click to scroll to top/hero section
	const handleBrandClick = () => {
		if (isHomepage) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}
	};

	return (
		<nav
			ref={navRef}
			className="sticky top-0 bg-black shadow-lg z-50 py-4"
			aria-label="main"
		>
			<Container>
				<div className="flex justify-between items-center">
					<NavBrand onHomeClick={handleBrandClick} />

					<div className="hidden md:flex items-center">
						<DesktopNavigation
							navLinks={navLinks}
							activeSection={activeSection}
							isHomepage={isHomepage}
							onLinkClick={handleSmoothScroll}
						/>
						<div className="ml-6">
							<LanguageSwitcher />
						</div>
					</div>

					{/* Mobile Menu Button and Language Switcher */}
					<div className="flex items-center gap-4 md:hidden">
						<LanguageSwitcher />
						<button
							className="text-white focus:outline-none"
							onClick={() => setIsOpen(!isOpen)}
							aria-controls="mobile-menu"
							aria-expanded={isOpen}
							aria-label={
								isOpen
									? t('navbar:btnMobileCloseAria')
									: t('navbar:btnMobileOpenAria')
							}
						>
							{isOpen ? (
								<FaTimes size={24} />
							) : (
								<FaBars size={24} />
							)}
						</button>
					</div>
				</div>
			</Container>

			{isOpen && (
				<MobileNavigation
					key="mobile-nav"
					navLinks={navLinks}
					activeSection={activeSection}
					isHomepage={isHomepage}
					onLinkClick={(e, href) => {
						handleSmoothScroll(e, href);
						setIsOpen(false);
					}}
					onClose={() => setIsOpen(false)}
				/>
			)}
		</nav>
	);
};

export default NavBar;
