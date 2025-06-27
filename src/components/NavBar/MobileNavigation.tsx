type NavLink = {
	name: string;
	href: string;
};

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
	return (
		<div className="md:hidden mt-4 py-4 border-t border-gray-800 animate-fadeIn">
			<div className="flex flex-col space-y-4">
				{navLinks.map((link) => (
					<a
						key={link.name}
						href={link.href}
						onClick={(e) => onLinkClick(e, link.href)}
						className={`block py-2 px-4 transition-colors hover:bg-elevation-100 rounded-md ${
							activeSection === link.href.substring(1) &&
							isHomepage
								? 'text-blue-400 font-medium'
								: 'text-gray-300'
						}`}
					>
						{link.name}
					</a>
				))}
			</div>
		</div>
	);
};

export default MobileNavigation;
