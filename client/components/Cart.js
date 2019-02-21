import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';

import CloseButton from './styles/CloseButton';
import StyledButton from './styles/StyledButton';
import User from './User';

class Cart extends Component {
	render() {
		return (
			<div>
				<CloseButton title="close">&times;</CloseButton>
				<h3>This is your cart</h3>
				<p>You have 2 items in your cart.</p>
				<div>
					<div>
						<p>Item #1</p>
						<p>$9.99</p>
						<p>x2</p>
						<p>$19.98</p>
					</div>
				</div>
				<StyledButton disabled>Checkout</StyledButton>
			</div>
		);
	}
}

export default Cart;
