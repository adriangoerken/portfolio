import React from 'react';

type NavButtonProps = {
	text: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	isActive: boolean;
};

const NavButton = ({ text, onClick, isActive }: NavButtonProps) => {
	return (
		<button
			className={`
                border-b-2 
                transition-all
                ${
					isActive
						? 'border-white scale-110'
						: 'border-transparent hover:border-white hover:scale-110'
				}
              `}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default NavButton;
