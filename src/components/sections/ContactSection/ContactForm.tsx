import { motion } from 'framer-motion';
import Textfield from '../../ui/Textfield';
import Textarea from '../../ui/Textarea';
import Button from '../../ui/Button';
import { useTranslation } from 'react-i18next';
import { useActionState } from 'react';
import { contactFormAction } from '../../../utils/actions';
import { BeatLoader } from 'react-spinners';

const ContactForm = () => {
	const { t } = useTranslation();
	const [state, formAction, isPending] = useActionState(
		contactFormAction,
		undefined
	);

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
					autocomplete="name"
				/>
				<Textfield
					id="email"
					name="email"
					label={t('contact:subSections.contactForm.labels.email')}
					autocomplete="email"
				/>
				<Textarea
					id="message"
					name="message"
					label={t('contact:subSections.contactForm.labels.message')}
				/>
				<Button
					variant="primary"
					type="submit"
					fullWidth={true}
					disabled={isPending}
					ariaBusy={isPending}
				>
					{isPending ? (
						<BeatLoader color="white" />
					) : (
						t('contact:subSections.contactForm.submitButton')
					)}
				</Button>
				{state?.message && (
					<p
						aria-live="assertive"
						className={
							state.success ? 'text-green-500' : 'text-red-500'
						}
					>
						{state.message}
					</p>
				)}
			</form>
		</motion.div>
	);
};

export default ContactForm;
