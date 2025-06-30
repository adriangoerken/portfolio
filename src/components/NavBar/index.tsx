import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Container from '../layout/Container';
import NavBrand from './NavBrand';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import useActiveSection from '../../hooks/useActiveSection';

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();
	const isHomepage = location.pathname === '/';

	const navLinks = [
		{ name: '', href: '#hero' },
		{ name: 'Profil', href: '#summary' },
		{ name: 'Erfahrung', href: '#experience' },
		{ name: 'Fähigkeiten', href: '#skills' },
		{ name: 'Projekte', href: '#projects' },
		{ name: 'Kontakt', href: '#contact' },
	];

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
		<nav className="bg-black shadow-lg sticky top-0 z-50 py-4">
			<Container>
				<div className="flex justify-between items-center">
					<NavBrand onHomeClick={handleBrandClick} />

					<DesktopNavigation
						navLinks={navLinks}
						activeSection={activeSection}
						isHomepage={isHomepage}
						onLinkClick={handleSmoothScroll}
					/>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden text-white focus:outline-none"
						onClick={() => setIsOpen(!isOpen)}
						aria-label={isOpen ? 'Close menu' : 'Open menu'}
					>
						{isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
					</button>
				</div>

				{isOpen && (
					<MobileNavigation
						navLinks={navLinks}
						activeSection={activeSection}
						isHomepage={isHomepage}
						onLinkClick={(e, href) => {
							handleSmoothScroll(e, href);
							setIsOpen(false);
						}}
					/>
				)}
			</Container>
		</nav>
	);
};

export default NavBar;
