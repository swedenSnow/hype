import Head from 'next/head';
import Signup from '../components/Signup';

const SignupPage = props => (
	<div>
		<Head>
			<title>Hype-gear || Sign Up for an Account</title>
		</Head>
		<div>
			<Signup />
		</div>
	</div>
);

export default SignupPage;
