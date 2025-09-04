import { NavLink } from '../../types/navbar';
import NavLinks from './NavLinks';

type MobileNavigationProps = {
	navLinks: NavLink[];
	activeSection: string;
	isHomepage: boolean;
	onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
	onClose: () => void;
};

const MobileNavigation = ({
	navLinks,
	activeSection,
	isHomepage,
	onLinkClick,
	onClose,
}: MobileNavigationProps) => {
	const getLinkClassName = (link: NavLink) => {
		const isActive = activeSection === link.href.substring(1) && isHomepage;
		return `block py-2 px-4 text-lg transition-colors hover:bg-elevation-100 rounded-md ${
			isActive ? 'text-blue-400 font-medium' : 'text-gray-300'
		}`;
	};

	return (
		<>
			{/* Navigation menu */}
			<div
				id="mobile-menu"
				className="absolute top-full left-0 right-0 bg-black border-t border-gray-800 shadow-lg z-40 animate-fadeIn md:hidden"
			>
				<div className="px-4 py-4">
					<ul className="flex flex-col items-center space-y-4">
						<NavLinks
							navLinks={navLinks}
							onLinkClick={onLinkClick}
							getLinkClassName={getLinkClassName}
							activeSection={activeSection}
							isHomepage={isHomepage}
						/>
					</ul>
				</div>
			</div>

			{/* Overlay covering the content */}
			<div
				className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 animate-fadeIn md:hidden"
				style={{ top: '64px' }}
				onClick={onClose}
			/>
		</>
	);
};

export default MobileNavigation;
