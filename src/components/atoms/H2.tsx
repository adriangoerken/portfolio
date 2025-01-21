import { ReactNode } from 'react';

type H2Props = {
	children: ReactNode;
};

const H2 = ({ children }: H2Props) => {
	return (
		<h2 className="text-5xl font-bold text-center text-blue-700">
			{children}
		</h2>
	);
};

export default H2;
