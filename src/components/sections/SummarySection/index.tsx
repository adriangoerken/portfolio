import SectionHeading from '../../ui/SectionHeading';
import SummaryText from './SummaryText';
import SummaryHighlights from './SummaryHighlights';

const SummarySection = () => {
	return (
		<div aria-labelledby="summary-heading">
			<SectionHeading id="summary-heading">Profil</SectionHeading>
			<SummaryText />
			<SummaryHighlights />
		</div>
	);
};

export default SummarySection;
