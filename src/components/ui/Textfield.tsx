import { Autocomplete } from '../../types/contact';

type TextfieldProps = {
	id: string;
	name: string;
	label: string;
	autocomplete: Autocomplete;
};

const Textfield = ({ id, name, label, autocomplete }: TextfieldProps) => {
	return (
		<div>
			<label
				htmlFor={id}
				className="block text-sm font-medium text-gray-400 mb-1"
			>
				{label}
			</label>
			<input
				type="text"
				id={id}
				name={name}
				autoComplete={autocomplete}
				className="w-full px-4 py-2 bg-elevation-100 border border-blue-600-aaa rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
				required
			/>
		</div>
	);
};

export default Textfield;
