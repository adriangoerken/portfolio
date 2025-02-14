import { ValidLink } from '../../lib/type';
import H3 from '../atoms/H3';
import AnimatedCard from './AnimatedCard';

type ContactCardProps = {
	header: string;
	link: ValidLink;
	text: string;
};

const ContactCard = ({ header, link, text }: ContactCardProps) => {
	return (
		<AnimatedCard
			as="a"
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className="text-center md:text-start hover:opacity-70 transition-colors ease-in-out w-full"
		>
			<H3>{header}</H3>
			{text}
		</AnimatedCard>
	);
};

export default ContactCard;
