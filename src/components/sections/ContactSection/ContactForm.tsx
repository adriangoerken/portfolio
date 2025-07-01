import { motion } from 'framer-motion';
import Textfield from '../../ui/Textfield';
import Textarea from '../../ui/Textarea';
import Button from '../../ui/Button';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
	const { t } = useTranslation();

	const formAction = (formData: FormData) => {
		console.log(
			'From Data: ',
			formData.get('name'),
			formData.get('email'),
			formData.get('message')
		);

		toast.error(t('contact:subSections.contactForm.disclaimerToast'));
	};

	return (
		<motion.div
			className="bg-custom-gray p-6 rounded-lg shadow-lg border border-elevation-100"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: 0.2 }}
		>
			<h3 className="text-xl font-semibold mb-6 text-white">
				{t('contact:subSections.contactForm.heading')}
			</h3>

			<form
				action={formAction}
				className="space-y-4"
				aria-describedby="form-disclaimer"
			>
				<Textfield
					id="name"
					name="name"
					label={t('contact:subSections.contactForm.labels.name')}
				/>
				<Textfield
					id="email"
					name="email"
					label={t('contact:subSections.contactForm.labels.email')}
				/>
				<Textarea
					id="message"
					name="message"
					label={t('contact:subSections.contactForm.labels.message')}
				/>
				<Button variant="primary" type="submit" fullWidth={true}>
					{t('contact:subSections.contactForm.submitButton')}
				</Button>

				<p id="form-disclaimer" className="text-xs text-gray-400 mt-2">
					{t('contact:subSections.contactForm.disclaimer')}
				</p>
			</form>
			<div aria-live="polite" className="sr-only"></div>
		</motion.div>
	);
};

export default ContactForm;
