import Head from 'next/head';
import Profile from '../components/Profile';

const AccountPage = props => (
	<div>
		<Head>
			<title>Hype-gear || User Profile </title>
		</Head>
		<Profile />
	</div>
);

export default AccountPage;
