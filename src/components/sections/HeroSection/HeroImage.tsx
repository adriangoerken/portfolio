import portrait from '../../../assets/images/portrait.webp';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SocialLink from '../../ui/SocialLink';
import { useTranslation } from 'react-i18next';

const HeroImage = () => {
	const { t } = useTranslation();

	return (
		<div className="w-full md:w-2/5">
			<div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg mx-auto">
				<img
					src={portrait}
					alt={t('hero:imageAlt')}
					loading="eager"
					className="w-full h-full object-cover"
				/>
			</div>

			{/* Quick social links */}
			<div className="flex justify-center mt-8 gap-4">
				<SocialLink
					href="https://github.com/adriangoerken"
					ariaLabel={t('hero:socialLinks.githubAria')}
					icon={<FaGithub size={20} />}
					className="bg-gray-800 hover:bg-gray-700"
				/>

				<SocialLink
					href="https://www.linkedin.com/in/adrian-goerken-202064353"
					ariaLabel={t('hero:socialLinks.linkedInAria')}
					icon={<FaLinkedin size={20} />}
					className="bg-blue-700 hover:bg-blue-600-aaa"
				/>
			</div>
		</div>
	);
};

export default HeroImage;
