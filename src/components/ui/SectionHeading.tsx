import { ReactNode } from 'react';

type SectionHeadingProps = {
	children: ReactNode;
	id: string;
	className?: string;
};

const SectionHeading = ({ children, id, className }: SectionHeadingProps) => {
	return (
		<h2
			id={id}
			className={`text-3xl font-bold mb-6 text-center ${className}`}
		>
			{children}
		</h2>
	);
};

export default SectionHeading;
