import Head from 'next/head';
import Items from '../components/Items';

const Shop = () => (
	<div>
		<Head>
			<title>Hype-gear || Shop</title>
		</Head>
		<div>
			<h2>All the sexy items for sale:</h2>
			<Items />
		</div>
	</div>
);

export default Shop;
