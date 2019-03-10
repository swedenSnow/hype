import Head from 'next/head';
import Signin from '../components/Signin';

const SigninPage = props => (
	<div>
		<Head>
			<title>Hype-gear || Sign In</title>
		</Head>
		<>
			<Signin />
		</>
	</div>
);

export default SigninPage;
