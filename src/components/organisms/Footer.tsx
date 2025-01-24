import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from './Container';
import { Link } from 'react-router-dom';
import { getLanguage } from '../../utils/utils';
import { useState } from 'react';

const Footer = () => {
	const [t, i18n] = useTranslation('global');
	const year = new Date().getFullYear();
	const [currentLang, setCurrentLang] = useState(
		getLanguage().substring(0, 2)
	);

	const handleChangeLanguage = (lang: string) => {
		i18n.changeLanguage(lang);
		setCurrentLang(lang);
	};

	return (
		<footer className="bg-elevation-300 text-white py-8">
			<Container>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
					<div className="text-center md:text-left">
						<h3 className="text-2xl font-bold mb-2 tracking-wider">
							Adrian Goerken
						</h3>
						<p className="opacity-75">
							&copy; {year}, {t('Footer.copyright')}
						</p>
					</div>
					<div className="flex justify-center gap-6 text-center">
						<Link
							to="/"
							className="hover:text-blue-700 transition-colors"
						>
							{t('Footer.links.linkHome')}
						</Link>
						<Link
							to="/imprint"
							className="hover:text-blue-700 transition-colors"
						>
							{t('Footer.links.linkImprint')}
						</Link>
						<Link
							to="/privacy-policy"
							className="hover:text-blue-700 transition-colors"
						>
							{t('Footer.links.linkPrivacy')}
						</Link>
					</div>
					<div className="flex gap-2 justify-self-center md:justify-self-end">
						{['de', 'en'].map((lang, index, arr) => (
							<React.Fragment key={lang}>
								<span
									key={lang}
									onClick={() => handleChangeLanguage(lang)}
									className={`border-b-2 border-b-transparent text-lg cursor-pointer text-white hover:scale-110 hover:border-b-white ${
										currentLang === lang
											? 'font-bold border-b-white'
											: ''
									}`}
								>
									{lang.toUpperCase()}
								</span>
								{index < arr.length - 1 && (
									<span className="text-xl text-white">
										|
									</span>
								)}
							</React.Fragment>
						))}
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
