import { ReactNode } from 'react';

type H1Props = {
	children: ReactNode;
};

const H1 = ({ children }: H1Props) => {
	return (
		<h2 className="text-4xl font-bold tracking-tight text-center text-blue-700">
			{children}
		</h2>
	);
};

export default H1;
