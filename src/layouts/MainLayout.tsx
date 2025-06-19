import { Outlet } from 'react-router-dom';
import Footer from '../components/organisms/Footer';
import Container from '../components/atoms/Container';

const MainLayout = () => {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Remove section and false && operator later */}
			<section className="flex items-center justify-center h-screen">
				<Container className="max-w-3xl">
					<div className="text-center p-12 bg-elevation-300 rounded-lg shadow-lg">
						<h1 className="text-4xl font-bold text-white mb-4">
							Under Maintenance
						</h1>
						<p className="text-lg text-gray-300">
							This site is currently undergoing maintenance.
						</p>
						<p className="text-lg text-gray-300">
							It should be back online shortly. Thank you for your
							patience.
						</p>
					</div>
				</Container>
			</section>
			<div className="flex flex-col flex-grow">{false && <Outlet />}</div>
			{false && <Footer />}
		</div>
	);
};

export default MainLayout;
