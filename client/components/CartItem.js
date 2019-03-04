import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import RemoveFromCart from './RemoveFromCart';

const CartItemStyles = styled.li`
	padding: 1rem 0;
	border-bottom: 1px solid ${props => props.theme.offWhite};
	list-style: none;
	overflow: scroll;
	display: grid;
	align-items: center;
	grid-template-columns: auto 1fr auto;
	img {
		margin-right: ${props => props.theme.root};
	}
	p {
		font-size: 2rem;
	}
`;

const CartItem = ({ cartItem }) => (
	<CartItemStyles>
		<img width="200" src={cartItem.item.image} alt={cartItem.item.title} />
		<div className="cart-item-details">
			<h3>{cartItem.item.title}</h3>
			<p>
				€{cartItem.item.price * cartItem.quantity}
				{' - '}
				<strong>
					{cartItem.quantity} &times; €{cartItem.item.price} each
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
