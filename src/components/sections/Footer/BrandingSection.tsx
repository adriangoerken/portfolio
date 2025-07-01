import { Link } from 'react-router-dom';
import { useScrollToSection } from '../../../hooks/useScrollToSection';

const BrandingSection = () => {
	const { scrollToTop } = useScrollToSection();

	return (
		<div className="text-center md:text-left">
			<Link
				to="/"
				onClick={scrollToTop}
				className="text-xl font-semibold hover:text-blue-400 transition-colors"
			>
				Adrian Goerken
			</Link>
		</div>
	);
};

export default BrandingSection;
