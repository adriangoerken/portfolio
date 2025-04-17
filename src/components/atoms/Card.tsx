import { ReactNode } from 'react';

type CardProps = {
	children: ReactNode;
	label?: string | null;
	className?: string;
};

const Card = ({ children, label = null, className = '' }: CardProps) => {
	return (
		<div
			className={`bg-elevation-300 p-4 rounded-xl ${className} ${
				label ? 'relative' : ''
			}`}
		>
			{label && (
				<span className="absolute top-0 right-0 z-10 bg-blue-700 text-white font-bold px-2 py-1 rounded-tr-xl rounded-bl-xl shadow-lg">
					{label}
				</span>
			)}
			{children}
		</div>
	);
};

export default Card;
