import { NavLink } from '../../types/navbar';
import NavLinks from './NavLinks';

type DesktopNavigationProps = {
	navLinks: NavLink[];
	activeSection: string;
	isHomepage: boolean;
	onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
};

const DesktopNavigation = ({
	navLinks,
	activeSection,
	isHomepage,
	onLinkClick,
}: DesktopNavigationProps) => {
	const getLinkClassName = (link: NavLink) => {
		const isActive = activeSection === link.href.substring(1) && isHomepage;
		return `transition-colors hover:text-blue-400 hover:border-b-blue-400 ${
			isActive
				? 'text-blue-400 font-medium border-b-blue-400 border-b-2'
				: 'text-gray-300 border-transparent border-b-2'
		}`;
	};

	return (
		<ul className="hidden md:flex space-x-6">
			<NavLinks
				navLinks={navLinks}
				onLinkClick={onLinkClick}
				getLinkClassName={getLinkClassName}
				activeSection={activeSection}
				isHomepage={isHomepage}
			/>
		</ul>
	);
};

export default DesktopNavigation;
