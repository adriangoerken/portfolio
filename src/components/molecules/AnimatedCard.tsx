import { motion } from 'framer-motion';
import { cardVariants } from '../../utils/animationUtils';
import Card from '../atoms/Card';
import { ReactNode } from 'react';

type AnimatedCardProps = {
	children: ReactNode;
	className?: string;
	onClick?: () => void;
	as?: 'div' | 'a';
	href?: string;
	target?: string;
	rel?: string;
};

const AnimatedCard = ({
	children,
	className = '',
	onClick,
	as = 'div',
	...props
}: AnimatedCardProps) => {
	const Component = motion[as];

	return (
		<Component
			variants={cardVariants}
			initial="hidden"
			whileInView="visible"
			whileHover="hover"
			whileTap="tap"
			viewport={{ once: true }}
			className={`hover:cursor-pointer ${className}`}
			onClick={onClick}
			{...props}
		>
			<Card className="h-full">{children}</Card>
		</Component>
	);
};

export default AnimatedCard;
