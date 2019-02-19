import Head from 'next/head';
import SingleItem from '../components/SingleItem';

const ItemPage = props => (
	<div>
		<Head>
			<title>Hype-gear || Item name</title>
		</Head>
		<div>Show an item here</div>
		<SingleItem id={props.query.id} />
	</div>
);

export default ItemPage;
