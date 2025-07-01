import { useTranslation } from 'react-i18next';

const SummaryText = () => {
	const { t } = useTranslation();
	return <p className="mb-6">{t('summary:summaryText')}</p>;
};

export default SummaryText;
