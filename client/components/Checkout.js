import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Router from 'next/router';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';

import calcTotalPrice from '../lib/calcTotalPrice';
import User, { CURRENTUSER_QUERY } from './User';
import ErrorMsg from './ErrorMsg';

const CREATE_ORDER_MUTATION = gql`
	mutation createOrder($token: String!) {
		createOrder(token: $token) {
			id
			charge
			total
			items {
				id
				title
			}
		}
	}
`;

function totalItems(cart) {
	return cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
}

class Checkout extends React.Component {
	onToken = async (res, createOrder) => {
		const order = await createOrder({
			variables: {
				token: res.id,
			},
		}).catch(err => {
			alert(err.message);
		});
		console.log(order);
	};
	render() {
		return (
			<User>
				{({ data: { self } }) => (
					<Mutation
						mutation={CREATE_ORDER_MUTATION}
						refetchQueries={[{ query: CURRENTUSER_QUERY }]}
					>
						{createOrder => (
							<StripeCheckout
								amount={self && calcTotalPrice(self.cart)}
								currency="EUR"
								name="Hype-Gear"
								description={
									self &&
									`Order of ${totalItems(self.cart)} item${
										self.cart === 1 ? '' : 's'
									}`
								}
								image={
									self &&
									self.cart.length &&
									self.cart[0].item &&
									self.cart[0].item.image
								}
								stripeKey="pk_test_BAcR59TBc30CmwVo7WDqP0sv"
								email={self && self.email}
								token={res => this.onToken(res, createOrder)}
								shippingAddress
								billingAddress={false}
								zipCode={false}
								bitcoin
							>
								{this.props.children}
							</StripeCheckout>
						)}
					</Mutation>
				)}
			</User>
		);
	}
}

export default Checkout;
