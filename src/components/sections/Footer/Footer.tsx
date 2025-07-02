import Container from '../../layout/Container';
import BrandingSection from './BrandingSection';
import LinksSection from './LinksSection';
import SocialLinksSection from './SocialLinksSection';
import CopyrightSection from './CopyrightSection';
import LighthouseBanner from './LighthouseBanner';

const Footer = () => {
	return (
		<footer className="bg-black py-8">
			<Container>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
					<BrandingSection />
					<LinksSection />
					<SocialLinksSection />
				</div>
				<LighthouseBanner />
				<CopyrightSection />
			</Container>
		</footer>
	);
};

export default Footer;
