import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SocialLink from '../../ui/SocialLink';

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
			className="bg-blue-700 hover:bg-blue-600-aaa"
		/>
	</div>
);

export default SocialLinksSection;
