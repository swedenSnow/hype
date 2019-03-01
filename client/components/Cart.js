import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';

import CloseButton from './styles/CloseButton';
import StyledButton from './styles/StyledButton';
import User from './User';
import CartItem from './CartItem';
import calcTotalPrice from '../lib/calcTotalPrice';

class Cart extends Component {
	render() {
		return (
			<User>
				{({ data: { self, cart } }) => {
					if (!self)
						return (
							<>
								<p>
									You need to be logged in in to view this
									page
								</p>
								<Link href="/signin">
									<a>Go to Login Page</a>
								</Link>
							</>
						);

					console.log(self);
					return (
						<div>
							<CloseButton title="close">&times;</CloseButton>
							<h3>
								This is {!self.name ? ' an Noname' : self.name}{' '}
								cart
							</h3>
							<p>
								{self.cart.length === 0 && (
									<p>Your cart is currently empty</p>
								)}
								{self.cart.length > 0 &&
									`You have ${self.cart.length} item
										${self.cart.length === 1 ? '' : 's'} in
										your cart.`}
							</p>
							<div>
								<ul>
									{self.cart.map(cartItem => (
										<CartItem
											key={cartItem.id}
											cartItem={cartItem}
										/>
									))}
								</ul>
								<div className="calcTotalPrice">
									<h3>Total amount</h3>
									<p>€{calcTotalPrice(self.cart)}</p>
								</div>
							</div>
							<StyledButton disabled>Checkout</StyledButton>
						</div>
					);
				}}
			</User>
		);
	}
}

export default Cart;
