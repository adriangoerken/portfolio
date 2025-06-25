import { NetworkContact } from '../../../types/contact';

type SocialNetworksProps = {
	socialNetworks: NetworkContact[];
};

const SocialNetworks = ({ socialNetworks }: SocialNetworksProps) => {
	return (
		<div>
			<h4 className="text-lg font-medium mb-3 text-blue-400">
				Soziale Netzwerke
			</h4>
			<div className="space-y-3">
				{socialNetworks.map((network, index) => (
					<div key={index} className="flex items-center gap-4">
						<div className="text-xl">{network.icon}</div>
						<a
							href={network.href}
							target="_blank"
							rel="noopener noreferrer"
							className="text-white hover:text-blue-400 transition-colors"
						>
							{network.label}
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default SocialNetworks;
