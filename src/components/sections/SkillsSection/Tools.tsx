import { FaTools } from 'react-icons/fa';
import { t } from 'i18next';
import { tools } from '../../../data/skillsData';

const Tools = () => {
	return (
		<div className="mt-12 rounded-lg">
			<h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
				<FaTools aria-hidden="true" className="text-blue-500" />
				{t('skills:toolsHeading')}
			</h3>
			<div className="flex flex-wrap gap-3">
				{tools.map((tool) => (
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
