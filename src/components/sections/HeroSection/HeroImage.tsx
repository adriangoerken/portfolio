import portrait from '../../../assets/images/portrait.webp';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const HeroImage = () => {
	return (
		<div className="w-full md:w-2/5">
			<div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg mx-auto">
				<img
					src={portrait}
					alt="Professionelles Portrait von Adrian Goerken "
					className="w-full h-full object-cover"
				/>
			</div>

			{/* Quick social links */}
			<div className="flex justify-center mt-8 gap-4">
				<a
					href="https://github.com/adriangoerken"
					target="_blank"
					className="p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-all"
				>
					<FaGithub size={20} />
				</a>
				<a
					href="https://www.linkedin.com/in/adrian-goerken-202064353"
					target="_blank"
					className="p-3 bg-blue-700 hover:bg-blue-600 text-white rounded-full transition-all"
				>
					<FaLinkedin size={20} />
				</a>
			</div>
		</div>
	);
};

export default HeroImage;
