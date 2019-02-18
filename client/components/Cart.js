import React, { Component } from 'react';

class Cart extends Component {
	render() {
		return (
			<div>
				This is your cart.
				<p>You have 2 items in your cart.</p>
				<div>
					<div>
						<p>Item #1</p>
						<p>$9.99</p>
						<p>x2</p>
						<p>$19.98</p>
					</div>
					<div>
						<p>Item #2</p>
						<p>$9.99</p>
						<p>x1</p>
						<p>$9.99</p>
					</div>
				</div>
				<button disabled>Checkout</button>
			</div>
		);
	}
}

export default Cart;
