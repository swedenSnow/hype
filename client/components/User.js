import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

const CURRENTUSER_QUERY = gql`
	query {
		self {
			id
			email
			firstName
			cart {
				id
				quantity
				item {
					id
					price
					image
					description
					user {
						firstName
						email
					}
				}
			}
		}
	}
`;

const User = props => (
	<Query {...props} query={CURRENTUSER_QUERY}>
		{payload => props.children(payload)}
	</Query>
);

User.propTypes = {
	children: PropTypes.func.isRequired,
};

export default User;
export { CURRENTUSER_QUERY };
