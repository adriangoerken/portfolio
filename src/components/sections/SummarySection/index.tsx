import SectionHeading from '../../ui/SectionHeading';
import SummaryText from './SummaryText';
import SummaryHighlights from './SummaryHighlights';
import { useTranslation } from 'react-i18next';

const SummarySection = () => {
	const { t } = useTranslation();

	return (
		<div aria-labelledby="summary-heading">
			<SectionHeading id="summary-heading">
				{t('summary:heading')}
			</SectionHeading>
			<SummaryText />
			<SummaryHighlights />
		</div>
	);
};

export default SummarySection;
