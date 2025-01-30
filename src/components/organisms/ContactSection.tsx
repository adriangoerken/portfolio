import H2 from '../atoms/H2';
import Grid from '../atoms/Grid';
import ContactCard from '../molecules/ContactCard';
import { useTranslation } from 'react-i18next';

type ContactSectionProps = {
	sectionContactRef: React.RefObject<HTMLElement>;
};

/*
A contact form for easy inquiries
Your email address and links to your social media profiles (e.g., LinkedIn, GitHub, Twitter)
*/
const ContactSection = ({ sectionContactRef }: ContactSectionProps) => {
	const [t] = useTranslation('global');

	return (
		<section ref={sectionContactRef}>
			<H2>{t('ContactSection.title')}</H2>
			<Grid>
				<ContactCard
					header="Email"
					link="mailto:kontakt@adriangoerken.de"
					text="kontakt@adriangoerken.de"
				/>
				<ContactCard
					header={t('ContactSection.phone')}
					link="tel:+4915203304956"
					text="+49 152 03304956"
				/>
				<ContactCard
					header="GitHub"
					link="https://github.com/adriangoerken"
					text="@adriangoerken"
				/>
				<ContactCard
					header="Xing"
					link="https://www.xing.com/profile/Adrian_Goerken"
					text="Adrian Goerken"
				/>
				<ContactCard
					header="Bluesky"
					link="https://bsky.app/profile/adriangoerken.de"
					text="@adriangoerken.de"
				/>
				<ContactCard
					header="Mastodon"
					link="https://mastodon.social/@adrian_goerken"
					text="@adrian_goerken"
				/>
			</Grid>
		</section>
	);
};

export default ContactSection;
