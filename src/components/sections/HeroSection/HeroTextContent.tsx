import Button from '../../ui/Button';
import { FaDownload } from 'react-icons/fa';
import { useScrollToSection } from '../../../hooks/useScrollToSection';
import { useTranslation } from 'react-i18next';

const HeroTextContent = () => {
	const { t, i18n } = useTranslation();
	const { scrollToSection } = useScrollToSection();

	// Determine which resume file to use based on the current language
	const resumeFile =
		i18n.language === 'de'
			? '/Adrian_Goerken_Lebenslauf.pdf'
			: '/Adrian_Goerken_Resume.pdf';

	return (
		<div className="w-full md:w-3/5 text-center md:text-left">
			<span className="inline-block px-4 py-2 bg-blue-900 text-blue-200 rounded-full text-sm font-medium mb-4">
				{t('hero:textContent.badge')}
			</span>

			{/* Headline */}
			<h1
				id="hero-heading"
				className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
			>
				{t('hero:textContent.headline')}
			</h1>

			{/* Value Proposition */}
			<p className="text-xl text-gray-300 mb-8">
				{t('hero:textContent.valueProposition')}
			</p>

			{/* CTA Buttons */}
			<div className="flex flex-wrap gap-4 justify-center md:justify-start">
				<Button
					as="link"
					href="#projects"
					variant="primary"
					onClick={(e) => scrollToSection(e, 'projects')}
				>
					{t('hero:textContent.ctaButtons.projects')}
					<span className="text-sm">→</span>
				</Button>
				<Button
					as="link"
					href={resumeFile}
					variant="secondary"
					target="_blank"
					ariaLabel={`${t(
						'hero:textContent.ctaButtons.downloadResume'
					)} ${t('ariaNewTab')}`}
				>
					{t('hero:textContent.ctaButtons.downloadResume')}
					<FaDownload size={16} />
				</Button>
			</div>
		</div>
	);
};

export default HeroTextContent;
