import { ReactNode } from 'react';

type ButtonBaseProps = {
	variant: 'primary' | 'secondary';
	children: ReactNode;
	className?: string;
	fullWidth?: boolean;
};

type ButtonAsButtonProps = ButtonBaseProps & {
	as?: 'button';
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
};

type ButtonAsLinkProps = ButtonBaseProps & {
	as: 'link';
	href: string;
	download?: string;
	target?: string;
};

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const Button = (props: ButtonProps) => {
	const { variant, children, className = '', fullWidth = false } = props;

	const baseClasses = 'px-8 py-3 font-medium rounded-lg transition-all';
	const flexClasses = 'flex items-center gap-2';
	const widthClasses = fullWidth ? 'w-full justify-center' : '';

	const variantClasses = {
		primary:
			'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg',
		secondary: 'border-2 border-blue-600 text-blue-600 hover:bg-gray-800',
	};

	const combinedClasses = `${baseClasses} ${flexClasses} ${widthClasses} ${variantClasses[variant]} ${className}`;

	if (props.as === 'link') {
		return (
			<a
				href={props.href}
				target={props.target}
				download={props.download}
				className={combinedClasses}
			>
				{children}
			</a>
		);
	}

	return (
		<button
			type={props.type || 'submit'}
			onClick={props.onClick}
			className={combinedClasses}
		>
			{children}
		</button>
	);
};

export default Button;
