import Button from '../../ui/Button';
import { FaDownload } from 'react-icons/fa';

const HeroTextContent = () => {
	return (
		<div className="w-full md:w-3/5 text-center md:text-left">
			<span className="inline-block px-4 py-2 bg-blue-900 text-blue-200 rounded-full text-sm font-medium mb-4">
				#OpenToWork
			</span>

			{/* Headline */}
			<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
				Frontend Entwickler mit 7 Jahren Erfahrung
			</h1>

			{/* Value Proposition */}
			<p className="text-xl text-gray-300 mb-8">
				Ich übersetze Geschäftsanforderungen in skalierbaren, wartbaren
				Code. Spezialisiert auf die Reduzierung von Komplexität und die
				Lieferung von Projekten, die die Erwartungen übertreffen.
			</p>

			{/* CTA Buttons */}
			<div className="flex flex-wrap gap-4 justify-center md:justify-start">
				<Button as="link" href="#projects" variant="primary">
					Projekte
					<span className="text-sm">→</span>
				</Button>
				<Button
					as="link"
					href="/adrian_goerken_lebenslauf.pdf"
					variant="secondary"
					target="_blank"
				>
					Lebenslauf
					<FaDownload size={16} />
				</Button>
			</div>
		</div>
	);
};

export default HeroTextContent;
