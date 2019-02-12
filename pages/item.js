import Head from 'next/head';
import Item from '../components/Item';

const ItemPage = () => (
	<div>
		<Head>
			<title>Hype-gear || Item name</title>
		</Head>
		<div>Show an item here</div>
		<Item />
	</div>
);

export default ItemPage;
