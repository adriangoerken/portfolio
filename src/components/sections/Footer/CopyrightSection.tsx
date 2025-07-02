import { useTranslation } from 'react-i18next';

const CopyrightSection = () => {
	const { t } = useTranslation();
	const currentYear = new Date().getFullYear();
	return (
		<div className="pt-4 border-t border-gray-800 text-center text-gray-400 text-sm">
			© {currentYear} Adrian Goerken. {t('footer:copyright')}
		</div>
	);
};

export default CopyrightSection;
