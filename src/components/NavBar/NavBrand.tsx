import { Link, useLocation } from 'react-router-dom';

type NavBrandProps = {
	onHomeClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

const NavBrand = ({ onHomeClick }: NavBrandProps) => {
	const location = useLocation();
	const isHomepage = location.pathname === '/';

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		if (isHomepage && onHomeClick) {
			e.preventDefault();
			onHomeClick(e);
		}
	};

	return (
		<Link
			to="/"
			onClick={handleClick}
			className="text-xl font-bold text-white hover:text-blue-400 transition-colors"
		>
			Adrian Goerken
		</Link>
	);
};

export default NavBrand;
