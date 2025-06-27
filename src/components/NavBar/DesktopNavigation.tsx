type NavLink = {
	name: string;
	href: string;
};

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
	return (
		<div className="hidden md:flex space-x-6">
			{navLinks.map((link) => (
				<a
					key={link.name}
					href={link.href}
					onClick={(e) => onLinkClick(e, link.href)}
					className={`transition-colors hover:text-blue-400 ${
						activeSection === link.href.substring(1) && isHomepage
							? 'text-blue-400 font-medium'
							: 'text-gray-300'
					}`}
				>
					{link.name}
				</a>
			))}
		</div>
	);
};

export default DesktopNavigation;
