import { ReactNode } from 'react';

type CardProps = {
	children: ReactNode;
	className?: string;
};

const Card = ({ children, className = '' }: CardProps) => {
	return (
		<div className={`bg-elevation-300 p-4 rounded-xl ${className}`}>
			{children}
		</div>
	);
};

export default Card;
