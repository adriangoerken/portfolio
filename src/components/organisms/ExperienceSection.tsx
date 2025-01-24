import { useTranslation } from 'react-i18next';
import H2 from '../atoms/H2';
import H3 from '../atoms/H3';

type ExperienceSectionProps = {
	sectionExperienceRef: React.RefObject<HTMLElement>;
};

/*
Highlight your professional experience, internships, or significant freelance work
Include job titles, company names, dates, and a brief description of your responsibilities and achievements
*/
const ExperienceSection = ({
	sectionExperienceRef,
}: ExperienceSectionProps) => {
	const [t] = useTranslation('global');

	return (
		<section ref={sectionExperienceRef}>
			<H2>{t('ExperienceSection.title')}</H2>
			<div>
				<H3>{t('ExperienceSection.items.itemOne.title')}</H3>

				<div className="text-center md:text-start flex flex-col gap-2 sm:gap-1">
					<span>
						{t('ExperienceSection.items.itemOne.list.listItemOne')}
					</span>
					<span>
						{t('ExperienceSection.items.itemOne.list.listItemTwo')}
					</span>
					<span>
						{t(
							'ExperienceSection.items.itemOne.list.listItemThree'
						)}
					</span>
					<span>
						{t('ExperienceSection.items.itemOne.list.listItemFour')}
					</span>
				</div>
			</div>
		</section>
	);
};

export default ExperienceSection;
