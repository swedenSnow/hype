import Head from 'next/head';
import Account from '../components/Account';

const AccountPage = () => (
	<div>
		<Head>
			<title>Hype-gear || My Account </title>
		</Head>
		<div>
			This is your account page.
			<Account />
		</div>
	</div>
);

export default AccountPage;
