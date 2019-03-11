import React from 'react';
import { Query } from 'react-apollo';
import Link from 'next/link';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { format } from 'date-fns';
import formatMoney from '../lib/formatMoney';
import StyledPage from './styles/StyledPage';

const StyledOrder = styled.div`
	position: relative;
	width: 100%;
	margin: 0 auto;
	background: #fff;
	padding: 0;
	box-shadow: none;
	color: #67676c;

	h2,
	h3 {
		margin: 1rem;
	}

	@media (min-width: 576px) {
		box-shadow: 0 0px 12px rgba(0, 0, 0, 0.1);
		padding: 3rem;
		width: 90%;

		h2,
		h3 {
			margin: 2rem;
		}
	}
`;

const OrderTable = styled.table`
	display: none;
	width: 100%;
	border-collapse: collapse;
	border-spacing: 0;

	width: 100%;
	margin-bottom: 5rem;

	@media (min-width: 576px) {
		display: table;
	}

	th,
	td {
		text-align: left;
		border-bottom: 1px dashed #ddd;
		padding: 0.1rem 0.2rem;
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
`;

const OrderItemsTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	border-spacing: 0;

	th,
	td {
		text-align: left;
		border-bottom: 1px dashed #ddd;
		padding: 0.1rem 0.2rem;
	}
	.product-image {
		width: 100px;
		height: auto;
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
`;

const MobileOrderDetails = styled.div`
	width: 100%;
	margin-bottom: 3rem;

	table {
		width: 100%;
	}

	th,
	td {
		text-align: left;
		border-bottom: 1px dashed #ddd;
		padding: 0.1rem 0.2rem;
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

	@media (min-width: 576px) {
		display: none;
	}
`;

const ORDER_QUERY = gql`
	query ORDER_QUERY($id: ID!) {
		order(id: $id) {
			id
			charge
			total
			createdAt
			dispatched
			user {
				id
			}
			items {
				id
				title
				description
				price
				image
				quantity
			}
		}
	}
`;

const Order = props => {
	return (
		<Query query={ORDER_QUERY} variables={{ id: props.id }}>
			{({ data, loading, error }) => {
				if (loading) return <p>Loading...</p>;
				if (!data.order) <p>No order found for that ID.</p>;
				const { order } = data;
				return (
					<StyledPage>
						<StyledOrder>
							<h2>Order</h2>
							<OrderItemsTable>
								<thead>
									<tr>
										<th>&nbsp;</th>
										<th>Item:</th>
										<th>Price:</th>
										<th>Quantity:</th>
										<th>Total:</th>
									</tr>
								</thead>
								<tbody>
									{order.items.map(item => {
										return (
											<tr key={item.id}>
												<td>
													<img
														className="product-image"
														src={item.image}
														alt={item.title}
													/>
												</td>
												<td>{item.title}</td>
												<td>
													{formatMoney(item.price)}
												</td>
												<td>x{item.quantity}</td>
												<td>
													{formatMoney(
														item.price *
															item.quantity
													)}
												</td>
											</tr>
										);
									})}
								</tbody>
							</OrderItemsTable>
							<h3>Order Details</h3>
							<OrderTable>
								<thead>
									<tr>
										<th>ID:</th>
										<th>Items:</th>
										<th>Products:</th>
										<th>Total:</th>
										<th>Order Placed:</th>
										<th>Dispatched:</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>{order.id}</td>
										<td>
											{order.items.reduce(
												(a, b) => a + b.quantity,
												0
											)}
										</td>
										<td>{order.items.length}</td>
										<td>{formatMoney(order.total)}</td>
										<td>
											{format(
												order.createdAt,
												'MMMM D, YYYY h:mm a'
											)}
										</td>
										<td>
											{order.dispatched === true
												? 'Yes'
												: 'No'}
										</td>
									</tr>
								</tbody>
							</OrderTable>
						</StyledOrder>
						<MobileOrderDetails>
							<table>
								<thead>
									<tr>
										<th>ID:</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>{order.id}</td>
									</tr>
								</tbody>
							</table>
							<table>
								<thead>
									<tr>
										<th>Order Placed:</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											{format(
												order.createdAt,
												'MMMM D, YYYY h:mm a'
											)}
										</td>
									</tr>
								</tbody>
							</table>
							<table>
								<thead>
									<tr>
										<th>Items:</th>
										<th>Products:</th>
										<th>Total:</th>
										<th>Dispatched:</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											{order.items.reduce(
												(a, b) => a + b.quantity,
												0
											)}
										</td>
										<td>{order.items.length}</td>
										<td>{formatMoney(order.total)}</td>
										<td>
											{order.dispatched === true
												? 'Yes'
												: 'No'}
										</td>
									</tr>
								</tbody>
							</table>
						</MobileOrderDetails>
					</StyledPage>
				);
			}}
		</Query>
	);
};

export default Order;
