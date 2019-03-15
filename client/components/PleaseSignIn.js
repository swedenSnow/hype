import { Query } from 'react-apollo';
import { CURRENTUSER_QUERY } from './User';
import Signin from './Signin';

const PleaseSignIn = props => (
	<Query query={CURRENTUSER_QUERY}>
		{({ data, loading }) => {
			if (loading) return <p>Loading...</p>;
			if (!data.self) {
				return (
					<div>
						{props.message && <p>{props.message}</p>}
						{!props.message && (
							<p>Please Sign In Before Continuing</p>
						)}
						<Signin />
					</div>
				);
			}
			return props.children;
		}}
	</Query>
);

export default PleaseSignIn;
