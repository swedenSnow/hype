import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';
import styled from 'styled-components';

import CloseButton from './styles/CloseButton';
import StyledButton from './styles/StyledButton';
import User from './User';
import CartItem from './CartItem';
import calcTotalPrice from '../lib/calcTotalPrice';
import Checkout from './Checkout';
import formatMoney from '../lib/formatMoney';

const TotalCheckout = styled.div`
	p {
		font-size: 2rem;
	}
`;

class Cart extends Component {
	render() {
		return (
			<User>
				{({ data: { self } }) => {
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

					return (
						<div>
							<Link href="/shop">
								<a>
									<CloseButton title="close">
										&times;
									</CloseButton>
								</a>
							</Link>
							<h3>
								{self.firstName && (
									<p>{self.firstName}'s' Cart</p>
								)}
							</h3>
							<p>
								{self.cart.length === 0 && (
									<em>Your cart is currently empty</em>
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
								<TotalCheckout>
									<h2>Total amount</h2>
									<p>
										{formatMoney(calcTotalPrice(self.cart))}
									</p>
								</TotalCheckout>
							</div>
							{self.cart.length ? (
								<Checkout>
									<StyledButton disabled={false}>
										Checkout
									</StyledButton>
								</Checkout>
							) : (
								''
							)}
						</div>
					);
				}}
			</User>
		);
	}
}

export default Cart;
