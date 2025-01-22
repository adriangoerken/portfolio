import { ReactNode } from 'react';

type H3Props = {
	children: ReactNode;
};

const H3 = ({ children }: H3Props) => {
	return (
		<h3 className="text-xl font-semibold tracking-normal text-white">
			{children}
		</h3>
	);
};

export default H3;
