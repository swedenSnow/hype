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
						console.log(data);
						return (
							<div>
								<strong>E-mail:</strong> {data.self.email}
								<br />
								<strong>First name:</strong>
								{data.self.firstName} <br />
								<strong>Last name:</strong> {data.self.lastName}
								<br />
								<strong>Password:</strong> ilikepenises <br />
								<hr />
								<Link href="/orders">
									<a>My Orders</a>
								</Link>
								Update Details
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
