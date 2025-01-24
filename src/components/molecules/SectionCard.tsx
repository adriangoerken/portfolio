import { ReactNode } from 'react';
import H2 from '../atoms/H2';

type SectionCardProps = {
	title: string;
	children: ReactNode;
};

const SectionCard = ({ title, children }: SectionCardProps) => {
	return (
		<div className="bg-elevation-300 p-5 rounded-lg">
			<H2 className="text-start">{title}</H2>
			{children}
		</div>
	);
};

export default SectionCard;
