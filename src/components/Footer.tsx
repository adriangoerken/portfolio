import { Link } from 'react-router-dom';
import Container from './layout/Container';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SocialLink from './ui/SocialLink';
import { useScrollToSection } from '../hooks/useScrollToSection';

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

const LinksSection = () => (
	<div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center">
		<Link
			to="/imprint"
			className="text-gray-300 hover:text-blue-400 transition-colors"
		>
			Impressum
		</Link>
		<Link
			to="/privacy-policy"
			className="text-gray-300 hover:text-blue-400 transition-colors"
		>
			Datenschutz
		</Link>
	</div>
);

const SocialLinksSection = () => (
	<div className="flex justify-center md:justify-end gap-4">
		<SocialLink
			href="https://github.com/adriangoerken"
			ariaLabel="GitHub Profil"
			icon={<FaGithub size={18} />}
			className="bg-gray-800 hover:bg-gray-700"
		/>
		<SocialLink
			href="https://www.linkedin.com/in/adrian-goerken-202064353"
			ariaLabel="LinkedIn Profil"
			icon={<FaLinkedin size={18} />}
			className="bg-blue-700 hover:bg-blue-600"
		/>
	</div>
);

const CopyrightSection = () => {
	const currentYear = new Date().getFullYear();
	return (
		<div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
			© {currentYear} Adrian Goerken. Alle Rechte vorbehalten.
		</div>
	);
};

const Footer = () => {
	return (
		<footer className="bg-custom-gray-dark py-8">
			<Container>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
					<BrandingSection />
					<LinksSection />
					<SocialLinksSection />
				</div>
				<CopyrightSection />
			</Container>
		</footer>
	);
};

export default Footer;
