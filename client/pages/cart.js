import Head from 'next/head';

import Cart from '../components/Cart';

const CartPage = props => (
	<div>
		<Head>
			<title>Hype-gear || Cart </title>
		</Head>
		<Cart />
	</div>
);
export default CartPage;
