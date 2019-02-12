import Head from 'next/head';
import FeaturedItems from '../components/FeaturedItems';

const HomePage = () => (
	<div>
		<Head>
			<title>Hype-gear || Home</title>
		</Head>
		<div className="hero">
			<h1 className="title">Welcome to Hype-gear!</h1>

			<hr />
			<h3>Featured items</h3>
			<p>Maybe one day?</p>
			<FeaturedItems />
		</div>
	</div>
);

export default HomePage;
