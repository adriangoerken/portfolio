import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getLanguage } from '../../utils/utils';

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();
	const [currentLang, setCurrentLang] = useState<string>('en');

	useEffect(() => {
		// Check localStorage first, then fall back to browser preference
		const savedLang = localStorage.getItem('language');
		const defaultLang = savedLang || getLanguage().substring(0, 2);

		// Ensure only supported languages are used
		const finalLang = ['en', 'de'].includes(defaultLang)
			? defaultLang
			: 'en';

		setCurrentLang(finalLang);
		i18n.changeLanguage(finalLang);
		localStorage.setItem('language', finalLang);
	}, [i18n]);

	const toggleLanguage = () => {
		const newLang = currentLang === 'en' ? 'de' : 'en';
		setCurrentLang(newLang);
		i18n.changeLanguage(newLang);
		localStorage.setItem('language', newLang);
	};

	return (
		<button
			onClick={toggleLanguage}
			className="flex items-center px-3 py-1 bg-elevation-100 rounded-md hover:bg-elevation-200 transition-colors"
			aria-label={`Switch to ${
				currentLang === 'en' ? 'German' : 'English'
			}`}
		>
			<span className="font-medium text-sm">
				{currentLang === 'en' ? 'DE' : 'EN'}
			</span>
		</button>
	);
};

export default LanguageSwitcher;
