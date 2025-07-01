import { Outlet } from 'react-router-dom';
import Footer from '../components/sections/Footer/Footer';
import NavBar from '../components/NavBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<NavBar />
			<div className="flex flex-col flex-grow">
				<Outlet />
			</div>
			<Footer />
			<ToastContainer theme="colored" />
		</div>
	);
};

export default MainLayout;
