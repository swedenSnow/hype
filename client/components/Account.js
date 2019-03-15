import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';
import styled from 'styled-components';
import PleaseSignIn from './PleaseSignIn';
import ErrorMsg from './ErrorMsg';
import StyledPage from './styles/StyledPage';

const StyledAccount = styled.div`
	position: relative;
	width: 90%;
	margin: 0 auto;
	background: #fff;
	padding: 10px 0;
	box-shadow: 0 0px 12px rgba(0, 0, 0, 0.1);
	color: #444;
	padding: 3rem;
	color: #67676c;

	a {
		&:hover {
			text-decoration: underline;
		}
	}

	hr {
		border: 0;
		border-bottom: 1px solid black;
	}

	table {
		width: 100%;
		margin: 2rem 0;
	}

	td {
		padding: 0.2rem 0.5rem;
	}

	.odd {
		color: #000;
		background: #f3f3f3;
		white-space: nowrap;
	}

	.even {
		width: 30%;
		border-bottom: 1px dashed #ddd;
		width: 99%;
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
								<StyledPage>
									<StyledAccount>
										<h2>ACCOUNT PAGE</h2>
										<hr />
										<table>
											<tbody>
												<tr>
													<td className="odd">
														<strong>
															E-mail:{' '}
														</strong>
													</td>
													<td className="even">
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
													<td className="odd">
														<strong>
															Username:
														</strong>
													</td>
													<td className="even">
														{data.self.userName}
													</td>
												</tr>
												<tr>
													<td className="odd">
														<strong>Name:</strong>
													</td>
													<td className="even">
														{data.self.firstName &&
															data.self
																.firstName +
																' ' +
																data.self
																	.lastName}
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
								</StyledPage>
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
