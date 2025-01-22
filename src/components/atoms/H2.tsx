import { ReactNode } from 'react';

type H2Props = {
	children: ReactNode;
};

const H2 = ({ children }: H2Props) => {
	return (
		<h2 className="text-3xl font-semibold tracking-normal text-center text-white">
			{children}
		</h2>
	);
};

export default H2;
