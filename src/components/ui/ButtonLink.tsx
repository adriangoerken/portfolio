import { ReactNode } from 'react';

type ButtonProps = {
	href: string;
	variant: 'primary' | 'secondary';
	children: ReactNode;
	download?: string;
	target?: string;
};

const Button = ({ href, variant, children, download, target }: ButtonProps) => {
	const baseClasses =
		'px-8 py-3 font-medium rounded-lg transition-all flex items-center gap-2';

	const variantClasses = {
		primary:
			'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg',
		secondary: 'border-2 border-blue-600 text-blue-600 hover:bg-gray-800',
	};

	return (
		<a
			href={href}
			target={target}
			download={download}
			className={`${baseClasses} ${variantClasses[variant]}`}
		>
			{children}
		</a>
	);
};

export default Button;
