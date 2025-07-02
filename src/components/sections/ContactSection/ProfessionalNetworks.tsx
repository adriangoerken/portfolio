import { useTranslation } from 'react-i18next';
import { NetworkContact } from '../../../types/contact';

type ProfessionalNetworksProps = {
	professionalNetworks: NetworkContact[];
};

const ProfessionalNetworks = ({
	professionalNetworks,
}: ProfessionalNetworksProps) => {
	const { t } = useTranslation();

	return (
		<div>
			<h4 className="text-lg font-medium mb-3 text-blue-400">
				{t(
					'contact:subSections.contactInfo.professionalNetworks.heading'
				)}
			</h4>
			<ul className="space-y-3">
				{professionalNetworks.map((network, index) => (
					<li key={index} className="flex items-center gap-4">
						<div className="text-xl">{network.icon}</div>
						<a
							href={network.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`${t(
								'contact:subSections.contactInfo.aria',
								{ label: network.label }
							)}`}
							className="text-white hover:text-blue-400 transition-colors"
						>
							{network.label}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ProfessionalNetworks;
