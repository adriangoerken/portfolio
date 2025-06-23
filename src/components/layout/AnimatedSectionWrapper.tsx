import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Container from './Container';

type AnimatedSectionWrapperProps = {
	children: ReactNode;
	bgColor?: 'custom-gray' | 'elevation-100';
	id?: string;
	className?: string;
};

const AnimatedSectionWrapper = ({
	children,
	bgColor = 'custom-gray',
	id,
	className = '',
}: AnimatedSectionWrapperProps) => {
	const getBackgroundClass = (): string => {
		switch (bgColor) {
			case 'custom-gray':
				return 'bg-custom-gray';
			case 'elevation-100':
				return 'bg-elevation-100';
			default:
				return 'bg-custom-gray';
		}
	};
	return (
		<motion.section
			id={id}
			className={`py-20 ${getBackgroundClass()} ${className}`}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-100px' }}
			transition={{ duration: 0.6 }}
		>
			<Container>{children}</Container>
		</motion.section>
	);
};

export default AnimatedSectionWrapper;
