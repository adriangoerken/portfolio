import { ElementType } from 'react';

type HighlightCardProps = {
	icon: ElementType;
	color: string;
	title: string;
	description: string;
};

const HighlightCard = ({
	icon: IconComponent,
	color,
	title,
	description,
}: HighlightCardProps) => {
	return (
		<div
			className="group h-full flex flex-col items-center p-6 bg-custom-gray rounded-lg shadow-lg 
                                         transition-all duration-300 ease-in-out hover:transform hover:scale-105 
                                         hover:shadow-xl focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50"
		>
			<div
				className={`${color} text-4xl mb-4 group-hover:scale-110 transition-transform duration-300`}
			>
				<IconComponent aria-hidden="true" />
			</div>
			<h3 className="font-semibold mb-3 text-white text-center text-lg">
				{title}
			</h3>
			<p className="text-center">{description}</p>
		</div>
	);
};

export default HighlightCard;
