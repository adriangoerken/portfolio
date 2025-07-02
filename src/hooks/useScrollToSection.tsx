import { useLocation } from 'react-router-dom';
import { getScrollOffset } from '../utils/utils';

export const useScrollToSection = () => {
	const location = useLocation();
	const isHomepage = location.pathname === '/';

	// Scroll to top function
	const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
		if (isHomepage) {
			e.preventDefault();
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}
	};

	// Scroll to specific section function
	const scrollToSection = (
		e: React.MouseEvent<HTMLAnchorElement>,
		sectionId: string
	) => {
		if (isHomepage) {
			e.preventDefault();
			const targetSection = document.getElementById(sectionId);
			if (targetSection) {
				window.scrollTo({
					top: targetSection.offsetTop - getScrollOffset(),
					behavior: 'smooth',
				});
			}
		}
	};

	return { scrollToTop, scrollToSection, isHomepage };
};
