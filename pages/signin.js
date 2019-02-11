import Head from 'next/head';
import Signin from '../components/Signin';

const SigninPage = () => (
    <div>
        <Head>
            <title>Hype-gear || Sign In</title>
        </Head>
        <div>
            <Signin />
        </div>
    </div>
);

export default SigninPage;
