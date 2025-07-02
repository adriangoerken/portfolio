import { useTranslation } from 'react-i18next';
import Container from '../components/layout/Container';

const PrivacyPolicyPage = () => {
	const { t } = useTranslation();

	return (
		<section className="py-16 bg-custom-gray">
			<Container>
				<h1 className="text-3xl font-bold mb-6">
					{t('privacypolicy:title')}
				</h1>

				<div className="bg-elevation-100 rounded-lg p-8 shadow-lg space-y-6">
					{/* Introduction */}
					<div>
						<h2 className="text-xl font-semibold mb-4 text-white">
							{t('privacypolicy:intro.heading')}
						</h2>
						<p className="mb-4 text-gray-300 text-start">
							{t('privacypolicy:intro.responsible')}
						</p>
						<p className="text-gray-300 text-start">
							{t('privacypolicy:intro.description')}
						</p>
					</div>

					{/* Data Collection */}
					<div>
						<h2 className="text-xl font-semibold mb-4 text-white">
							{t('privacypolicy:dataCollection.heading')}
						</h2>
						<h3 className="text-lg font-medium mb-2 text-blue-400">
							{t(
								'privacypolicy:dataCollection.serverLogs.heading'
							)}
						</h3>
						<p className="mb-4 text-gray-300 text-start">
							{t(
								'privacypolicy:dataCollection.serverLogs.description'
							)}
						</p>
						<ul className="list-disc ml-5 mb-4 text-gray-300 space-y-1 text-start">
							<li>
								{t(
									'privacypolicy:dataCollection.serverLogs.ip'
								)}
							</li>
							<li>
								{t(
									'privacypolicy:dataCollection.serverLogs.date'
								)}
							</li>
							<li>
								{t(
									'privacypolicy:dataCollection.serverLogs.browser'
								)}
							</li>
							<li>
								{t(
									'privacypolicy:dataCollection.serverLogs.os'
								)}
							</li>
							<li>
								{t(
									'privacypolicy:dataCollection.serverLogs.referrer'
								)}
							</li>
						</ul>
						<p className="text-gray-300 text-start">
							{t(
								'privacypolicy:dataCollection.serverLogs.purpose'
							)}
						</p>
					</div>

					{/* Contact Form */}
					<div>
						<h2 className="text-xl font-semibold mb-4 text-white">
							{t('privacypolicy:contactForm.heading')}
						</h2>
						<p className="mb-4 text-gray-300 text-start">
							{t('privacypolicy:contactForm.description')}
						</p>
						<ul className="list-disc ml-5 mb-4 text-gray-300 space-y-1 text-start">
							<li>{t('privacypolicy:contactForm.name')}</li>
							<li>{t('privacypolicy:contactForm.email')}</li>
							<li>{t('privacypolicy:contactForm.message')}</li>
						</ul>
						<p className="mb-4 text-gray-300 text-start">
							{t('privacypolicy:contactForm.storage')}
						</p>
						<p className="text-gray-300 text-start">
							{t('privacypolicy:contactForm.deletion')}
						</p>
					</div>

					{/* GitHub */}
					<div>
						<h2 className="text-xl font-semibold mb-4 text-white">
							{t('privacypolicy:github.heading')}
						</h2>
						<p className="mb-4 text-gray-300 text-start">
							{t('privacypolicy:github.description')}
						</p>
						<p className="text-gray-300 text-start">
							{t('privacypolicy:github.privacyPolicy')}:{' '}
							<a
								href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-400 hover:underline"
							>
								https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement
							</a>
						</p>
					</div>

					{/* Cloudflare Pages */}
					<div>
						<h2 className="text-xl font-semibold mb-4 text-white">
							{t('privacypolicy:cloudflare.heading')}
						</h2>
						<p className="mb-4 text-gray-300 text-start">
							{t('privacypolicy:cloudflare.description')}
						</p>
						<p className="text-gray-300 text-start">
							{t('privacypolicy:cloudflare.privacyPolicy')}:{' '}
							<a
								href="https://www.cloudflare.com/privacypolicy/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-400 hover:underline"
							>
								https://www.cloudflare.com/privacypolicy/
							</a>
						</p>
					</div>

					{/* Hetzner */}
					<div>
						<h2 className="text-xl font-semibold mb-4 text-white">
							{t('privacypolicy:hetzner.heading')}
						</h2>
						<p className="mb-4 text-gray-300 text-start">
							{t('privacypolicy:hetzner.description')}
						</p>
						<p className="text-gray-300 text-start">
							{t('privacypolicy:hetzner.privacyPolicy')}:{' '}
							<a
								href="https://www.hetzner.com/legal/privacy-policy"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-400 hover:underline"
							>
								https://www.hetzner.com/legal/privacy-policy
							</a>
						</p>
					</div>

					{/* Cookies */}
					<div>
						<h2 className="text-xl font-semibold mb-4 text-white">
							{t('privacypolicy:cookies.heading')}
						</h2>
						<p className="text-gray-300 text-start">
							{t('privacypolicy:cookies.description')}
						</p>
					</div>

					{/* User Rights */}
					<div>
						<h2 className="text-xl font-semibold mb-4 text-white">
							{t('privacypolicy:userRights.heading')}
						</h2>
						<p className="mb-4 text-gray-300 text-start">
							{t('privacypolicy:userRights.description')}
						</p>
						<ul className="list-disc ml-5 mb-4 text-gray-300 space-y-2 text-start">
							<li>
								<strong>
									{t(
										'privacypolicy:userRights.access.heading'
									)}
								</strong>
								:{' '}
								{t(
									'privacypolicy:userRights.access.description'
								)}
							</li>
							<li>
								<strong>
									{t(
										'privacypolicy:userRights.rectification.heading'
									)}
								</strong>
								:{' '}
								{t(
									'privacypolicy:userRights.rectification.description'
								)}
							</li>
							<li>
								<strong>
									{t(
										'privacypolicy:userRights.deletion.heading'
									)}
								</strong>
								:{' '}
								{t(
									'privacypolicy:userRights.deletion.description'
								)}
							</li>
							<li>
								<strong>
									{t(
										'privacypolicy:userRights.restriction.heading'
									)}
								</strong>
								:{' '}
								{t(
									'privacypolicy:userRights.restriction.description'
								)}
							</li>
							<li>
								<strong>
									{t(
										'privacypolicy:userRights.objection.heading'
									)}
								</strong>
								:{' '}
								{t(
									'privacypolicy:userRights.objection.description'
								)}
							</li>
							<li>
								<strong>
									{t(
										'privacypolicy:userRights.portability.heading'
									)}
								</strong>
								:{' '}
								{t(
									'privacypolicy:userRights.portability.description'
								)}
							</li>
						</ul>
					</div>

					{/* Changes to Policy */}
					<div>
						<h2 className="text-xl font-semibold mb-4 text-white">
							{t('privacypolicy:changes.heading')}
						</h2>
						<p className="text-gray-300 text-start">
							{t('privacypolicy:changes.description')}
						</p>
					</div>

					{/* Contact for Privacy Issues */}
					<div>
						<h2 className="text-xl font-semibold mb-4 text-white">
							{t('privacypolicy:contact.heading')}
						</h2>
						<p className="mb-4 text-gray-300 text-start">
							{t('privacypolicy:contact.description')}
						</p>
						<p className="text-gray-300 text-start">
							<strong>Email:</strong>{' '}
							<a
								href="mailto:kontakt@adriangoerken.de"
								className="text-blue-400 hover:underline"
							>
								kontakt@adriangoerken.de
							</a>
						</p>
					</div>

					{/* Last Updated */}
					<div className="pt-4 border-t border-gray-700">
						<p className="text-gray-400 text-sm text-start">
							{t('privacypolicy:lastUpdated')}:&ensp;
							{new Date().toLocaleDateString()}
						</p>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default PrivacyPolicyPage;
