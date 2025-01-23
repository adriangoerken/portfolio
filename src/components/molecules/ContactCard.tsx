import { ValidLink } from '../../lib/type';
import H3 from '../atoms/H3';

type ContactCardProps = {
	header: string;
	link: ValidLink;
	text: string;
};

const ContactCard = ({ header, link, text }: ContactCardProps) => {
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className="text-center md:text-start bg-elevation-300 hover:opacity-70 p-4 rounded-lg transition-colors ease-in-out w-full"
		>
			<H3>{header}</H3>
			{text}
		</a>
	);
};

export default ContactCard;
