import { ReactNode } from 'react';

type H1Props = {
	children: ReactNode;
};

const H1 = ({ children }: H1Props) => {
	return (
		<h1 className="text-[40px] md:text-[50px] lg:text-[60px] stext-5xl font-bold tracking-tight text-center md:text-start text-blue-700">
			{children}
		</h1>
	);
};

export default H1;
