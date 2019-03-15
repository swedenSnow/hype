import Head from 'next/head';
import Order from '../components/Order';

const OrdersPage = props => (
	<div>
		<Head>
			<title>Hype-gear || Order: #1</title>
		</Head>
		<div>
			<Order id={props.query.id} />
		</div>
	</div>
);

export default OrdersPage;
