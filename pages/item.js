import Head from 'next/head';
import SingleItem from '../components/SingleItem';

const ItemPage = () => (
	<div>
		<Head>
			<title>Hype-gear || Item name</title>
		</Head>
		<div>Show an item here</div>
		<SingleItem />
	</div>
);

export default ItemPage;
