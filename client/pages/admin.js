import Head from 'next/head';
import Admin from '../components/Admin';

const AdminPage = props => (
	<div>
		<Head>
			<title>Hype-gear || Admin Page</title>
		</Head>
		<div>
			This page needs to be restricted!
			<Admin />
		</div>
	</div>
);

export default AdminPage;
