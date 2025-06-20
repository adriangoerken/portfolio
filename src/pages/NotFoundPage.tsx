import { Link } from 'react-router-dom';
import Container from '../components/Container';
import { t } from 'i18next';

const NotFoundPage = () => {
	return (
		<Container className="flex flex-grow justify-center">
			<section className="text-center flex flex-col justify-center items center h96">
				<h1 className="text-6xl font-bold mb-4">
					{t('NotFoundPage.message')}
				</h1>
				<Link to="/" className="hover:underline">
					{t('NotFoundPage.btnBack')}
				</Link>
			</section>
		</Container>
	);
};

export default NotFoundPage;
