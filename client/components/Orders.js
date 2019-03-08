import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';
import styled from 'styled-components';
import formatMoney from '../lib/formatMoney';

const StyledOrdersTable = styled.table`
	width: 60%;

	th,
	td {
		text-align: right;
		vertical-align: middle;
	}

	.ordernumber {
		text-align: left;
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
						<div>
							<h2>My orders</h2>
							<StyledOrdersTable>
								<thead>
									<tr>
										<th className="ordernumber">Order #</th>
										<th>Items</th>
										<th>Products</th>
										<th>Total</th>
									</tr>
								</thead>
								<tbody>
									{data.myOrders.map(order => {
										console.log(order);
										return (
											<tr key={order.id}>
												<td className="ordernumber">
													<Link
														href={{
															pathname: '/order',
															query: {
																id: order.id,
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
												<td>{order.items.length}</td>
												<td>
													{formatMoney(order.total)}
												</td>
											</tr>
										);
									})}
								</tbody>
							</StyledOrdersTable>
						</div>
					);
				}}
			</Query>
		);
	}
}

export default Orders;
