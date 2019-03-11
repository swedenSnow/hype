import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Head from 'next/head';
import Link from 'next/link';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import AddToCart from './AddToCart';
import User from './User';
import DeleteItem from './DeleteItem';
import StyledButton from './styles/StyledButton';
import StyledPage from './styles/StyledPage';
import formatMoney from '../lib/formatMoney';

const ItemActions = styled.div`
	display: flex;

	button {
		margin-right: 1rem;
	}
`;

const StyledItem = styled.div`
	.item-title {
		text-transform: uppercase;
	}

	img {
		width: 150px;
	}

	@media (min-width: 576px) {
		img {
			width: 200px;
		}
	}

	@media (min-width: 768px) {
		img {
			width: 300px;
		}
	}

	@media (min-width: 992px) {
		img {
			width: 400px;
		}
	}

	hr {
		border: 0;
		border-bottom: 1px solid #000;
	}
`;

const SINGLEITEM_QUERY = gql`
	query SINGLEITEM_QUERY($id: ID!) {
		item(where: { id: $id }) {
			id
			title
			description
			image
			price
			sold
			user {
				id
				userName
			}
		}
	}
`;

class SingleItem extends Component {
	render() {
		return (
			<User>
				{({ data: { self } }) => {
					return (
						<Query
							query={SINGLEITEM_QUERY}
							variables={{
								id: this.props.id,
							}}
						>
							{({ data, loading, error }) => {
								if (loading) return <p>Loading...</p>;
								if (error) {
									return <p>Error: {error.message}</p>;
								}
								if (!data.item)
									return (
										<p>No ItemFound for {this.props.id}</p>
									);

								const { item } = data;
								const userName = item.user.userName
									? item.user.userName
									: item.user.id;
								return (
									<StyledPage>
										<Head>
											<title>
												Hype-gear || {item.title}
											</title>
										</Head>
										<StyledItem>
											<h2 className="item-title">
												{item.title}
											</h2>
											<p>
												<strong>Price: </strong>
												{formatMoney(item.price)}
											</p>
											<img
												src={item.image}
												alt={item.title}
											/>
											<p>
												<strong>Description:</strong>
												<br />
												{item.description}
											</p>
											<p>
												<strong>Sold By User: </strong>
												<Link
													href={{
														pathname: '/user',
														query: {
															id: item.user.id,
														},
													}}
												>
													<a>{userName}</a>
												</Link>
											</p>
											{!item.sold ? (
												<AddToCart id={item.id} />
											) : (
												<strong>Out of stock.</strong>
											)}

											{self && self.id === item.user.id && (
												<>
													<hr />
													<ItemActions>
														<StyledButton>
															<Link
																href={{
																	pathname:
																		'updateitem',
																	query: {
																		id:
																			item.id,
																	},
																}}
															>
																<a>
																	<FontAwesomeIcon
																		icon={
																			faPencilAlt
																		}
																	/>{' '}
																	Update Item
																</a>
															</Link>
														</StyledButton>
														<DeleteItem
															id={item.id}
														>
															{' '}
															<FontAwesomeIcon
																icon={faTrash}
															/>{' '}
															Delete Item
														</DeleteItem>
													</ItemActions>
												</>
											)}
											<hr />
											<Link href="/shop">
												<a>Back to Items</a>
											</Link>
										</StyledItem>
									</StyledPage>
								);
							}}
						</Query>
					);
				}}
			</User>
		);
	}
}

export default SingleItem;
