import Head from 'next/head';
import Items from '../components/Items';

const Shop = props => (
	<div>
		<Head>
			<title>Hype-gear || Shop</title>
		</Head>
		<div>
			<Items />
		</div>
	</div>
);

export default Shop;
