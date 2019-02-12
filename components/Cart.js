import React, { Component } from 'react';

class Cart extends Component {
	render() {
		return (
			<div>
				This is your cart.
				<p>You have 0 items.</p>
				<button disabled>Checkout</button>
			</div>
		);
	}
}

export default Cart;
