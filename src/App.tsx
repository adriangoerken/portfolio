import ImprintPage from './pages/ImprintPage';
import IndexPage from './pages/IndexPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import MainLayout from './layouts/MainLayout';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<IndexPage />} />
					<Route path="imprint" element={<ImprintPage />} />
					<Route
						path="privacy-policy"
						element={<PrivacyPolicyPage />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
