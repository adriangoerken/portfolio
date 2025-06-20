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

const initialLanguage = getLanguage().substring(0, 2);

i18next.init({
	lng: initialLanguage,
	fallbackLng: 'en',
	ns: ['global'],
	defaultNS: 'global',
	resources: {
		en: {
			global: global_en,
		},
		de: {
			global: global_de,
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
