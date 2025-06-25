import { motion } from 'framer-motion';
import Textfield from '../../ui/Textfield';
import Textarea from '../../ui/Textarea';
import Button from '../../ui/Button';
import { toast } from 'react-toastify';

const ContactForm = () => {
	const formAction = (formData: FormData) => {
		console.log(
			'From Data: ',
			formData.get('name'),
			formData.get('email'),
			formData.get('message')
		);

		toast.error(
			'Dieses Kontaktformular funktioniert aktuell noch nicht. Bitte die angegebenen Kontaktdaten nutzen.'
		);
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
				Nachricht senden
			</h3>

			<form action={formAction} className="space-y-4">
				<Textfield id="name" name="name" label="Name" />
				<Textfield id="email" name="email" label="E-Mail" />
				<Textarea id="message" name="message" label="Nachricht" />
				<Button variant="primary" type="submit" fullWidth={true}>
					Senden
				</Button>

				<p className="text-xs text-gray-400 mt-2">
					* Dieses Kontaktformular ist aktuell nur ein Designelement
					und funktioniert noch nicht. Bitte nutzen Sie die
					angegebenen Kontaktdaten für eine Nachricht.
				</p>
			</form>
		</motion.div>
	);
};

export default ContactForm;
