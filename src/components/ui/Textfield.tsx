type TextfieldProps = {
	id: string;
	name: string;
	label: string;
};

const Textfield = ({ id, name, label }: TextfieldProps) => {
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
				className="w-full px-4 py-2 bg-elevation-100 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
				required
			/>
		</div>
	);
};

export default Textfield;
