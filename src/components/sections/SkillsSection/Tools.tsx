import { FaTools } from 'react-icons/fa';

const Tools = () => {
	return (
		<div className="mt-12 p-6 rounded-lg">
			<h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
				<FaTools className="text-blue-500" />
				Methoden & Tools
			</h3>
			<div className="flex flex-wrap gap-3">
				{[
					'Git',
					'SCRUM',
					'Agile',
					'VS Code',
					'PhpStorm',
					'PL/SQL Developer',
					'XAMPP',
					'Postman',
					'Beekeeper Studio',
					'FileZilla',
					'Linux',
				].map((tool) => (
					<span
						key={tool}
						className="px-4 py-2 bg-custom-gray text-white rounded-lg shadow-lg"
					>
						{tool}
					</span>
				))}
			</div>
		</div>
	);
};

export default Tools;
