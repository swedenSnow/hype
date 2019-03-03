import Head from 'next/head';
import Orders from '../components/Orders';

const OrdersPage = props => (
	<div>
		<Head>
			<title>Hype-gear || My Orders</title>
		</Head>
		<div>
			<Orders />
		</div>
	</div>
);

export default OrdersPage;
