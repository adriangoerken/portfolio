import { ReactNode } from 'react';

type H2Props = {
	children: ReactNode;
	className?: string;
};

const H2 = ({ children, className }: H2Props) => {
	return (
		<h2
			className={`text-3xl font-semibold tracking-normal text-center text-white mb-2 ${className}`}
		>
			{children}
		</h2>
	);
};

export default H2;
