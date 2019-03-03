import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

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

class Orders extends Component {
	render() {
		return (
			<div>
				My orders
				<StyledOrdersTable>
					<thead>
						<tr>
							<th className="ordernumber">Order #</th>
							<th>Quantity</th>
							<th>Total</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="ordernumber">
								<Link
									href={{
										pathname: '/order',
										query: { id: '1' },
									}}
								>
									<a>#132453455</a>
								</Link>
							</td>
							<td>3 products</td>
							<td>$49.99</td>
						</tr>
						<tr>
							<td className="ordernumber">
								<Link
									href={{
										pathname: '/order',
										query: { id: '1' },
									}}
								>
									<a>#132453455</a>
								</Link>
							</td>
							<td>1 product</td>
							<td>$19.99</td>
						</tr>
					</tbody>
				</StyledOrdersTable>
			</div>
		);
	}
}

export default Orders;
