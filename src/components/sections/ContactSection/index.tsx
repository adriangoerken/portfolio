import {
	FaEnvelope,
	FaPhone,
	FaGithub,
	FaLinkedin,
	FaXing,
} from 'react-icons/fa';
import { SiMastodon, SiBluesky } from 'react-icons/si';
import SectionHeading from '../../ui/SectionHeading';
import ContactForm from './ContactForm';
import ContactInfoCard from './ContactInfoCard';

const ContactSection = () => {
	// Primary contact methods most relevant for recruiters
	const primaryContacts = [
		{
			icon: <FaEnvelope className="text-blue-500" />,
			label: 'E-Mail',
			value: 'adrian.goerken@proton.me',
			href: 'mailto:adrian.goerken@proton.me',
			isPrimary: true,
		},
		{
			icon: <FaPhone className="text-green-500" />,
			label: 'Telefon',
			value: '+49 152 0330 4956',
			href: 'tel:+4915203304956',
			isPrimary: false,
		},
	];

	// Professional networks
	const professionalNetworks = [
		{
			icon: <FaLinkedin className="text-blue-700" />,
			label: 'LinkedIn',
			value: 'adrian-goerken-202064353',
			href: 'https://www.linkedin.com/in/adrian-goerken-202064353',
		},
		{
			icon: <FaXing className="text-green-700" />,
			label: 'Xing',
			value: 'Adrian_Goerken',
			href: 'https://www.xing.com/profile/Adrian_Goerken',
		},
		{
			icon: <FaGithub className="text-gray-400" />,
			label: 'GitHub',
			value: 'adriangoerken',
			href: 'https://github.com/adriangoerken',
		},
	];

	// Social networks (less relevant for recruiters, but good for completeness)
	const socialNetworks = [
		{
			icon: <SiBluesky className="text-blue-400" />,
			label: 'Bluesky',
			value: 'adriangoerken.de',
			href: 'https://bsky.app/profile/adriangoerken.de',
		},
		{
			icon: <SiMastodon className="text-purple-500" />,
			label: 'Mastodon',
			value: '@adrian_goerken',
			href: 'https://mastodon.social/@adrian_goerken',
		},
	];

	return (
		<div aria-labelledby="contact-heading">
			<SectionHeading id="contact-heading">Kontakt</SectionHeading>

			<div className="max-w-3xl mx-auto">
				<p className="text-center mb-10">
					Ich freue mich über Ihre Kontaktaufnahme und bin offen für
					neue Herausforderungen. Am schnellsten erreichen Sie mich
					per E-Mail.
				</p>

				<div className="grid md:grid-cols-2 gap-8">
					<ContactInfoCard
						primaryContacts={primaryContacts}
						professionalNetworks={professionalNetworks}
						socialNetworks={socialNetworks}
					/>
					<ContactForm />
				</div>
			</div>
		</div>
	);
};

export default ContactSection;
