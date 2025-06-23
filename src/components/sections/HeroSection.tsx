import Container from '../Container';
import portrait from '../../assets/images/portrait.webp';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import Button from '../ui/Button';

const HeroSection = () => {
	return (
		<section>
			<Container className="flex flex-col md:flex-row items-center justify-between gap-12">
				{/* Professional Photo */}
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

				{/* Text Content */}
				<div className="w-full md:w-3/5 text-center md:text-left">
					<span className="inline-block px-4 py-2 bg-blue-900 text-blue-200 rounded-full text-sm font-medium mb-4">
						#OpenToWork
					</span>

					{/* Headline */}
					<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
						Frontend Entwickler mit 7 Jahren Erfahrung
					</h1>

					{/* Value Proposition */}
					<p className="text-xl text-gray-300 mb-8 leading-relaxed">
						Ich übersetze Geschäftsanforderungen in skalierbaren,
						wartbaren Code. Spezialisiert auf die Reduzierung von
						Komplexität und die Lieferung von Projekten, die die
						Erwartungen übertreffen.
					</p>

					{/* CTA Buttons */}
					<div className="flex flex-wrap gap-4 justify-center md:justify-start">
						<Button href="#projects" variant="primary">
							Projekte
							<span className="text-sm">→</span>
						</Button>
						<Button
							href="/adrian_goerken_lebenslauf.pdf"
							variant="secondary"
							target="_blank"
						>
							Lebenslauf
							<FaDownload size={16} />
						</Button>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default HeroSection;
