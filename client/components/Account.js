import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';
import styled from 'styled-components';
import PleaseSignIn from './PleaseSignIn';
import ErrorMsg from './ErrorMsg';

const StyledAccount = styled.div`
	padding: 2rem;

	a {
		&:hover {
			text-decoration: underline;
		}
	}

	hr {
		border: 0;
		border-bottom: 1px solid black;
	}
`;

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
						if (loading) return <p>Loading...</p>;
						if (error) return <ErrorMsg error={error} />;
						if (data.self) {
							return (
								<StyledAccount>
									<h2>This is your account page</h2>
									<hr />
									<table>
										<tbody>
											<tr>
												<td>
													<strong>E-mail: </strong>
												</td>
												<td>
													<a
														href={`mailto:${
															data.self.email
														}`}
													>
														{data.self.email}
													</a>
												</td>
											</tr>
											<tr>
												<td>
													<strong>Username:</strong>
												</td>
												<td>{data.self.userName}</td>
											</tr>
											<tr>
												<td>
													<strong>Name:</strong>
												</td>
												<td>
													{data.self.firstName &&
														data.self.firstName +
															' ' +
															data.self.lastName}
												</td>
											</tr>
										</tbody>
									</table>
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
								</StyledAccount>
							);
						} else {
							return <p>Nothing to see here</p>;
						}
					}}
				</Query>
			</PleaseSignIn>
		);
	}
}

export default Account;
