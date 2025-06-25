import { PrimaryContact } from '../../../types/contact';

type PrimaryContactProps = {
	primaryContacts: PrimaryContact[];
};

const PrimaryContacts = ({ primaryContacts }: PrimaryContactProps) => {
	return (
		<div className="space-y-4">
			{primaryContacts.map((contact, index) => (
				<div
					key={index}
					className={`flex items-center gap-4 ${
						contact.isPrimary
							? 'p-3 bg-elevation-100 rounded-lg'
							: ''
					}`}
				>
					<div className="text-xl">{contact.icon}</div>
					<div>
						<p className="text-sm text-gray-400">{contact.label}</p>
						<a
							href={contact.href}
							className="text-white hover:text-blue-400 transition-colors"
						>
							{contact.value}
						</a>
					</div>
				</div>
			))}
		</div>
	);
};

export default PrimaryContacts;
