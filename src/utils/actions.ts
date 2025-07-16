import { validateEmail } from './utils';
import axios from 'axios';
import { t } from 'i18next';
import { API_BASE_URL, API_MESSAGE_ENDPOINT } from '../config/constants';

export const contactFormAction = async (prevState: any, formData: FormData) => {
	console.log(prevState);

	const data = {
		name: formData.get('name')?.toString().trim() ?? '',
		email: formData.get('email')?.toString().trim() ?? '',
		message: formData.get('message')?.toString().trim() ?? '',
	};

	// Client-side validation
	if (!data.name || !data.email || !data.message) {
		return { success: false, message: 'All fields are required.' };
	}

	if (!validateEmail(data.email)) {
		return {
			success: false,
			message: t('contact:subSections.contactForm.errorMessage'),
		};
	}

	// API call
	try {
		const response = await axios.post(
			`${API_BASE_URL}/${API_MESSAGE_ENDPOINT}`,
			data
		);

		if (!response.data.success) {
			console.error(response.data.message);
			return {
				success: false,
				message: t('contact:subSections.contactForm.errorMessage'),
			};
		}

		return {
			success: true,
			message: t('contact:subSections.contactForm.successMessage'),
		};
	} catch (error) {
		console.error(error);
		return {
			success: false,
			message: t('contact:subSections.contactForm.errorMessage'),
		};
	}
};
