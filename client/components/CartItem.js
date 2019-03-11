import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RemoveFromCart from './RemoveFromCart';
import formatMoney from '../lib/formatMoney';

const CartItemStyles = styled.li`
	padding: 2rem 0;
	border-bottom: 1px solid ${props => props.theme.offWhite};
	list-style: none;
	overflow: scroll;
	display: grid;
	align-items: center;
	grid-template-columns: auto 1fr auto;
	font-weight: 200;

	overflow: hidden;
	img {
		margin: 0 ${props => props.theme.XL} 0 ${props => props.theme.XL};
	}
	p {
		font-size: 2rem;
	}

	.cart-item-details h3 {
		font-size: 5rem;
		font-weight: 300;
		button {
			margin-right: 2rem;
		}
	}
`;

const CartItem = ({ cartItem }) => (
	<CartItemStyles>
		<img width="200" src={cartItem.item.image} alt={cartItem.item.title} />
		<div className="cart-item-details">
			<h3>{cartItem.item.title}</h3>
			<p>
				{formatMoney(cartItem.item.price * cartItem.quantity)}
				{' - '}
				<strong>
					{cartItem.quantity} &times;{' '}
					{formatMoney(cartItem.item.price)} each
				</strong>
			</p>
		</div>
		<RemoveFromCart id={cartItem.id} />
	</CartItemStyles>
);

CartItem.propTypes = {
	cartItem: PropTypes.object.isRequired,
};

export default CartItem;
