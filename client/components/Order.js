import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { format } from 'date-fns';
import formatMoney from '../lib/formatMoney';
import Link from 'next/link';

const OrderTable = styled.table`
	width: 80%;

	th,
	td {
		text-align: left;
	}
`;

const OrderItemsTable = styled.table`
	width: 80%;

	th,
	td {
		text-align: left;
	}
	.product-image {
		width: 100px;
		height: auto;
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
				const { order } = data;
				return (
					<div>
						<OrderTable>
							<thead>
								<tr>
									<th>Order ID:</th>
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
						<OrderItemsTable>
							<thead>
								<tr>
									<th>&nbsp;</th>
									<th>Item:</th>
									<th>Quantity:</th>
									<th>Price:</th>
								</tr>
							</thead>
							<tbody>
								{order.items.map(item => {
									console.log(item);
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
											<td>x{item.quantity}</td>
											<td>{formatMoney(item.price)}</td>
										</tr>
									);
								})}
							</tbody>
						</OrderItemsTable>
					</div>
				);
			}}
		</Query>
	);
};

export default Order;
