import { NavLink } from '../../types/navbar';
import NavLinks from './NavLinks';

type MobileNavigationProps = {
	navLinks: NavLink[];
	activeSection: string;
	isHomepage: boolean;
	onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
};

const MobileNavigation = ({
	navLinks,
	activeSection,
	isHomepage,
	onLinkClick,
}: MobileNavigationProps) => {
	const getLinkClassName = (link: NavLink) => {
		const isActive = activeSection === link.href.substring(1) && isHomepage;
		return `block py-2 px-4 transition-colors hover:bg-elevation-100 rounded-md ${
			isActive ? 'text-blue-400 font-medium' : 'text-gray-300'
		}`;
	};

	return (
		<div
			id="mobile-menu"
			className="md:hidden mt-4 py-4 border-t border-gray-800 animate-fadeIn"
		>
			<ul className="flex flex-col space-y-4">
				<NavLinks
					navLinks={navLinks}
					onLinkClick={onLinkClick}
					getLinkClassName={getLinkClassName}
					activeSection={activeSection}
					isHomepage={isHomepage}
				/>
			</ul>
		</div>
	);
};

export default MobileNavigation;
