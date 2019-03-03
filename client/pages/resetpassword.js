import Head from 'next/head';
import ResetPassword from '../components/ResetPassword';

const ResetPasswordPage = props => (
	<div>
		<Head>
			<title>Hype-gear || Reset password </title>
		</Head>
		<ResetPassword resetToken={props.query.resetToken} />
	</div>
);

export default ResetPasswordPage;
