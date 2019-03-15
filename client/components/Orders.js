import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';
import styled from 'styled-components';
import StyledPage from './styles/StyledPage';
import formatMoney from '../lib/formatMoney';

const StyledOrders = styled.div`
	position: relative;
	width: 100%;
	margin: 0 auto;
	background: #fff;
	color: #67676c;
	box-shadow: none;
	padding: 0;

	@media (min-width: 576px) {
		box-shadow: 0 0px 12px rgba(0, 0, 0, 0.1);
		padding: 2rem;
		width: 90%;
	}
`;

const StyledOrdersTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	border-spacing: 0;

	th,
	td {
		text-align: left;
		padding: 0.1rem 0.2rem;
	}

	td {
		border-bottom: 1px dashed #ddd;
	}

	thead {
		tr {
			border: 1px solid #e9ecf2;
			border-left: none;
			border-right: none;
			color: #67676c;
			min-height: 52px;
			font-weight: 700;
		}

		th {
			background: #f3f3f3;
		}
	}

	.order {
		width: 1px;
		text-align: left;
	}

	.products {
		display: none;
	}

	@media (min-width: 576px) {
		.products {
			display: table-cell;
		}
	}

	img {
		width: 100%;
		height: auto;
	}

	td.image {
		width: 100px;
	}
`;

const MYORDERS_QUERY = gql`
	query MYORDERS_QUERY {
		myOrders(orderBy: createdAt_DESC) {
			id
			total
			createdAt
			dispatched
			items {
				id
				title
				quantity
			}
			user {
				id
				email
				userName
				firstName
			}
		}
	}
`;

class Orders extends Component {
	render() {
		return (
			<Query query={MYORDERS_QUERY}>
				{({ data, loading, error }) => {
					return (
						<StyledPage>
							<StyledOrders>
								<h2>My orders</h2>
								<StyledOrdersTable>
									<thead>
										<tr>
											<th className="order">Order #</th>
											<th>Items</th>
											<th className="products">
												Products
											</th>
											<th>Total</th>
										</tr>
									</thead>
									<tbody>
										{data.myOrders.map(order => {
											return (
												<tr key={order.id}>
													<td className="order">
														<Link
															href={{
																pathname:
																	'/order',
																query: {
																	id:
																		order.id,
																},
															}}
														>
															<a>#{order.id}</a>
														</Link>
													</td>
													<td>
														{order.items.reduce(
															(a, b) =>
																a + b.quantity,
															0
														)}
													</td>
													<td className="products">
														{order.items.length}
													</td>
													<td>
														{formatMoney(
															order.total
														)}
													</td>
												</tr>
											);
										})}
									</tbody>
								</StyledOrdersTable>
							</StyledOrders>
						</StyledPage>
					);
				}}
			</Query>
		);
	}
}

export default Orders;
