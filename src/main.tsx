import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

import App from './App.tsx';
import { getLanguage } from './utils/utils.ts';
import global_en from './translations/en/global.json';
import global_de from './translations/de/global.json';
import navbar_en from './translations/en/navbar.json';
import navbar_de from './translations/de/navbar.json';
import hero_en from './translations/en/hero.json';
import hero_de from './translations/de/hero.json';
import summary_en from './translations/en/summary.json';
import summary_de from './translations/de/summary.json';
import experience_en from './translations/en/experience.json';
import experience_de from './translations/de/experience.json';
import skills_en from './translations/en/skills.json';
import skills_de from './translations/en/skills.json';
import projects_en from './translations/en/projects.json';
import projects_de from './translations/de/projects.json';
import contact_en from './translations/en/contact.json';
import contact_de from './translations/de/contact.json';
import footer_en from './translations/en/footer.json';
import footer_de from './translations/de/footer.json';
import imprint_en from './translations/en/imprint.json';
import imprint_de from './translations/de/imprint.json';
import privacypolicy_en from './translations/en/privacypolicy.json';
import privacypolicy_de from './translations/de/privacypolicy.json';

const initialLanguage = getLanguage().substring(0, 2);

i18next.init({
	lng: initialLanguage,
	fallbackLng: 'en',
	defaultNS: 'global',
	resources: {
		en: {
			global: global_en,
			navbar: navbar_en,
			hero: hero_en,
			summary: summary_en,
			experience: experience_en,
			skills: skills_en,
			projects: projects_en,
			contact: contact_en,
			footer: footer_en,
			imprint: imprint_en,
			privacypolicy: privacypolicy_en,
		},
		de: {
			global: global_de,
			navbar: navbar_de,
			hero: hero_de,
			summary: summary_de,
			experience: experience_de,
			skills: skills_de,
			projects: projects_de,
			contact: contact_de,
			footer: footer_de,
			imprint: imprint_de,
			privacypolicy: privacypolicy_de,
		},
	},
});

const rootElement = document.getElementById('root');
if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<I18nextProvider i18n={i18next}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</I18nextProvider>
		</StrictMode>
	);
} else {
	console.error('Root element not found');
}
