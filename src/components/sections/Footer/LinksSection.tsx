import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const LinksSection = () => {
	const { t } = useTranslation();

	return (
		<div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center">
			<Link
				to="/imprint"
				className="text-gray-300 hover:text-blue-400 transition-colors"
			>
				{t('footer:links.imprint')}
			</Link>
			<Link
				to="/privacy-policy"
				className="text-gray-300 hover:text-blue-400 transition-colors"
			>
				{t('footer:links.privacyPolicy')}
			</Link>
		</div>
	);
};

export default LinksSection;
