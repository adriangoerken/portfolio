import SectionHeading from '../../ui/SectionHeading';
import { t } from 'i18next';
import SummaryText from './SummaryText';
import SummaryHighlights from './SummaryHighlights';

const SummarySection = () => {
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
