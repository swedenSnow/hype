import Head from 'next/head';
import UpdateItem from '../components/UpdateItem';

const UpdateItemPage = props => (
	<div>
		<Head>
			<title>Hype-gear || Update Item</title>
		</Head>
		<UpdateItem id={props.query.id} />
	</div>
);

export default UpdateItemPage;
