import ImprintPage from './pages/ImprintPage';
import IndexPage from './pages/IndexPage';
import { Route, Routes } from 'react-router-dom';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import MainLayout from './layouts/MainLayout';
import NotFoundPage from './pages/NotFoundPage';

function App() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<IndexPage />} />
				<Route path="imprint" element={<ImprintPage />} />
				<Route path="privacy-policy" element={<PrivacyPolicyPage />} />
				{/* 404 page */}
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
}

export default App;
