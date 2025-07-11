type TextareaProps = {
	id: string;
	name: string;
	label: string;
};

const Textarea = ({ id, name, label }: TextareaProps) => {
	return (
		<div>
			<label
				htmlFor="message"
				className="block text-sm font-medium text-gray-400 mb-1"
			>
				{label}
			</label>
			<textarea
				id={id}
				name={name}
				rows={5}
				className="w-full px-4 py-2 bg-elevation-100 border border-blue-600-aaa rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
				required
			></textarea>
		</div>
	);
};

export default Textarea;
