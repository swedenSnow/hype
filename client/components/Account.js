import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';
import PleaseSignIn from './PleaseSignIn';

const USERINFO_QUERY = gql`
	query {
		self {
			id
			email
			userName
			firstName
			lastName
		}
	}
`;

class Account extends Component {
	render() {
		return (
			<PleaseSignIn message="Please sign in to view your account.">
				<Query query={USERINFO_QUERY}>
					{({ data, loading, error }) => {
						return (
							<div>
								<strong>E-mail: </strong>
								<a href={`mailto:${data.self.email}`}>
									{data.self.email}
								</a>
								<br />
								<strong>Username: </strong>
								{data.self.userName} <br />
								<strong>Mame: </strong>
								{data.self.firstName + ' ' + data.self.lastName}
								<br />
								<strong>Address: </strong>
								<br />
								<strong>Postal Code: </strong>
								<br />
								<strong>City: </strong>
								<br />
								<hr />
								<Link href="/orders">
									<a>My Orders</a>
								</Link>
								<br />
								<Link
									href={{
										pathname: '/account',
										query: { action: 'edit' },
									}}
								>
									<a>Update Details</a>
								</Link>
								<br />
								Change Password
								<br />
							</div>
						);
					}}
				</Query>
			</PleaseSignIn>
		);
	}
}

export default Account;
