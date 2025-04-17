import { ReactNode } from 'react';

type H3Props = {
	children: ReactNode;
	className?: string;
};

const H3 = ({ children, className }: H3Props) => {
	return (
		<h3
			className={`text-xl font-semibold tracking-normal text-white ${className}`}
		>
			{children}
		</h3>
	);
};

export default H3;
