import Head from 'next/head';
import SellItem from '../components/SellItem';

const SigninPage = props => (
	<div>
		<Head>
			<title>Hype-gear || Sell an item</title>
		</Head>
		<div>
			<SellItem />
		</div>
	</div>
);

export default SigninPage;
