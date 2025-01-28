import { ReactNode } from 'react';

type GridProps = {
	children: ReactNode;
	className?: string;
};

const Grid = ({ children, className = '' }: GridProps) => {
	return (
		<div
			className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center gap-4 ${className}`}
		>
			{children}
		</div>
	);
};

export default Grid;
