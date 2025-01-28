import { ValidLink } from '../../lib/type';
import Card from '../atoms/Card';
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
			className="text-center md:text-start hover:opacity-70 transition-colors ease-in-out w-full"
		>
			<Card>
				<H3>{header}</H3>
				{text}
			</Card>
		</a>
	);
};

export default ContactCard;
