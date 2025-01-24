import Container from './Container';
import { Link } from 'react-router-dom';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="bg-elevation-300 text-white py-8">
			<Container>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
					<div className="text-center md:text-left">
						<h3 className="text-2xl font-bold mb-2 tracking-wider">
							Adrian Goerken
						</h3>
						<p className="opacity-75">
							&copy; {year}, All rights reserved.
						</p>
					</div>
					<div className="flex justify-center gap-6 text-center">
						<Link
							to="/"
							className="hover:text-blue-700 transition-colors"
						>
							Home
						</Link>
						<Link
							to="/imprint"
							className="hover:text-blue-700 transition-colors"
						>
							Imprint
						</Link>
						<Link
							to="/privacy-policy"
							className="hover:text-blue-700 transition-colors"
						>
							Privacy Policy
						</Link>
					</div>
					<div className="text-right opacity-60 hidden md:block">
						Web Developer Portfolio
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
