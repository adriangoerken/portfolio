import HeroImage from './HeroImage';
import HeroTextContent from './HeroTextContent';

const HeroSection = () => {
	return (
		<div className="flex flex-col md:flex-row items-center justify-between gap-12">
			<HeroImage />
			<HeroTextContent />
		</div>
	);
};

export default HeroSection;
