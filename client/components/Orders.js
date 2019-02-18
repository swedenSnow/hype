import React, { Component } from 'react';

class Orders extends Component {
	render() {
		return (
			<div>
				My orders
				<div>
					<p>Order #1</p>
					<p>3 products</p>
					<p>Total: $49.99</p>
				</div>
				<div>
					<p>Order #2</p>
					<p>1 products</p>
					<p>Total: $19.99</p>
				</div>
			</div>
		);
	}
}

export default Orders;
