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

const StyledCart = styled.div`
	display: flex;
	flex-flow: column wrap;
	max-width: ${props => props.theme.maxWidthInner};
	margin: 0 auto;
	padding: 6rem 0 6rem 0;

	a {
		align-self: flex-end;
	}
	.cart-name-container {
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 0;
		font-size: 3rem;
		h3 {
			font-weight: 300;
		}
	}
	.checkout * > * {
		width: 100%;
	}
`;

const TotalCheckout = styled.div`
	padding: 1rem 0 1rem 0;
	width: 100%;
	h2,
	p {
		font-size: 2rem;
		font-weight: 300;
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
						<StyledCart>
							{/* <Link href="/shop">
								<a>
									<CloseButton title="close">
										&times;
									</CloseButton>
								</a>
							</Link> */}
							<div className="cart-name-container">
								<h3>
									{self.firstName && (
										<p>{self.firstName}'s' Cart</p>
									)}
								</h3>
								<Link href="/shop">
									<a>
										<CloseButton title="close">
											&times;
										</CloseButton>
									</a>
								</Link>
							</div>
							<em>
								{self.cart.length === 0 && (
									<em>Your cart is currently empty</em>
								)}
								{self.cart.length > 0 &&
									`You have ${self.cart.length} item${
										self.cart.length === 1 ? '' : "'s"
									} in
										your cart.`}
							</em>
							<div>
								<ul>
									{self.cart.map(cartItem => (
										<>
											<CartItem
												key={cartItem.id}
												cartItem={cartItem}
											/>
										</>
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
								<div className="checkout">
									<Checkout>
										<StyledButton disabled={false}>
											Checkout
										</StyledButton>
									</Checkout>
								</div>
							) : (
								''
							)}
						</StyledCart>
					);
				}}
			</User>
		);
	}
}

export default Cart;
