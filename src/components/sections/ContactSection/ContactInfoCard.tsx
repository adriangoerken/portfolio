import { motion } from 'framer-motion';
import PrimaryContacts from './PrimaryContacts';
import { NetworkContact, PrimaryContact } from '../../../types/contact';
import ProfessionalNetworks from './ProfessionalNetworks';
import SocialNetworks from './SocialNetworks';
import { useTranslation } from 'react-i18next';

type ContactInfoCardProps = {
	primaryContacts: PrimaryContact[];
	professionalNetworks: NetworkContact[];
	socialNetworks: NetworkContact[];
};

const ContactInfoCard = ({
	primaryContacts,
	professionalNetworks,
	socialNetworks,
}: ContactInfoCardProps) => {
	const { t } = useTranslation();
	return (
		<motion.div
			className="bg-custom-gray p-6 rounded-lg shadow-lg border border-elevation-100"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
		>
			<h3 className="text-xl font-semibold mb-6 text-white">
				{t('contact:subSections.contactInfo.heading')}
			</h3>

			<div className="space-y-8">
				<PrimaryContacts primaryContacts={primaryContacts} />
				<ProfessionalNetworks
					professionalNetworks={professionalNetworks}
				/>
				<SocialNetworks socialNetworks={socialNetworks} />
			</div>
		</motion.div>
	);
};

export default ContactInfoCard;
