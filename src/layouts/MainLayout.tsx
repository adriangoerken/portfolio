import { Outlet } from 'react-router-dom';
import Footer from '../components/organisms/Footer';

const MainLayout = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<div className="flex flex-col flex-grow">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default MainLayout;
