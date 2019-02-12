import Head from 'next/head';
import Orders from '../components/Orders';

const OrdersPage = () => (
	<div>
		<Head>
			<title>Hype-gear || Order</title>
		</Head>
		<div>
			<p>Show orders here...</p>
			<Orders />
		</div>
	</div>
);

export default OrdersPage;
