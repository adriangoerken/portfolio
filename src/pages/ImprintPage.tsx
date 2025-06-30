import { t } from 'i18next';
import Container from '../components/layout/Container';

const ImprintPage = () => {
	return (
		<section className="py-16 bg-custom-gray">
			<Container>
				<h1 className="text-3xl font-bold mb-6">
					{t('imprint:title')}
				</h1>

				<div className="bg-elevation-100 rounded-lg p-8 shadow-lg">
					<div className="mb-8">
						<h2 className="text-xl font-semibold mb-4 text-white">
							{t('imprint:contactInfo.heading')}
						</h2>
						<div className="space-y-2">
							<p>Adrian Goerken</p>
							<p>Wollgrasweg 3</p>
							<p>26676 Barßel</p>
							<p>{t('imprint:contactInfo.address.country')}</p>
						</div>
					</div>

					<div className="mb-8">
						<h2 className="text-xl font-semibold mb-4 text-white">
							{t('imprint:contactInfo.contact')}
						</h2>
						<div className="space-y-2">
							<p>
								{t('imprint:contactInfo.email')}:
								<a
									href="mailto:kontakt@adriangoerken.de"
									className="text-blue-400 hover:underline"
								>
									&ensp;kontakt@adriangoerken.de
								</a>
							</p>
							<p>
								{t('imprint:contactInfo.phone')}:
								<a
									href="tel:+4915203304956"
									className="text-blue-400 hover:underline"
								>
									&ensp;+49 152 0330 4956
								</a>
							</p>
						</div>
					</div>

					<div className="mb-8">
						<h2 className="text-xl font-semibold mb-4 text-white">
							{t('imprint:liability.heading')}
						</h2>
						<p className="mb-4">
							{t('imprint:liability.contentResponsibility')}
						</p>
						<p>{t('imprint:liability.externalLinks')}</p>
					</div>

					<div className="mb-8">
						<h2 className="text-xl font-semibold mb-4 text-white">
							{t('imprint:copyright.heading')}
						</h2>
						<p>{t('imprint:copyright.notice')}</p>
					</div>

					<div>
						<h2 className="text-xl font-semibold mb-4 text-white">
							{t('imprint:dataProtectionOfficer.heading')}
						</h2>
						<p>{t('imprint:dataProtectionOfficer.note')}</p>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default ImprintPage;
