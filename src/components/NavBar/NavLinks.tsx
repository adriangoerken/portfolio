import { NavLink } from '../../types/navbar';

type NavLinksProps = {
	navLinks: NavLink[];
	onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
	getLinkClassName: (link: NavLink, isActive: boolean) => string;
	activeSection: string;
	isHomepage: boolean;
};

const NavLinks = ({
	navLinks,
	onLinkClick,
	getLinkClassName,
	activeSection,
	isHomepage,
}: NavLinksProps) => {
	return (
		<>
			{navLinks.map((link) => {
				const isActive =
					activeSection === link.href.substring(1) && isHomepage;
				if (link.name !== 'Start' && link.name !== 'Home') {
					return (
						<li key={link.name}>
							<a
								href={link.href}
								onClick={(e) => onLinkClick(e, link.href)}
								className={getLinkClassName(link, isActive)}
								aria-current={isActive ? 'page' : undefined}
							>
								{link.name}
							</a>
						</li>
					);
				}
			})}
		</>
	);
};

export default NavLinks;
