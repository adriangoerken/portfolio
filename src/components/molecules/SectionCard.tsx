import { ReactNode } from 'react';
import H2 from '../atoms/H2';
import Card from '../atoms/Card';

type SectionCardProps = {
	title: string;
	children: ReactNode;
};

const SectionCard = ({ title, children }: SectionCardProps) => {
	return (
		<Card>
			<H2 className="text-start">{title}</H2>
			{children}
		</Card>
	);
};

export default SectionCard;
