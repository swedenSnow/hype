import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { CURRENTUSER_QUERY } from './User';

const REMOVE_FROM_CART_MUTATION = gql`
	mutation removeFromCart($id: ID!) {
		removeFromCart(id: $id) {
			id
		}
	}
`;

const RemoveButton = styled.button`
	font-size: 3rem;
	background: none;
	border: 0;
	&:hover {
		color: ${props => props.theme.blue};
		cursor: pointer;
	}
`;

class RemoveFromCart extends React.Component {
	static propTypes = {
		id: PropTypes.string.isRequired,
	};

	update = (cache, payload) => {
		console.log('Running remove update fnc');
		const data = cache.readQuery({ query: CURRENTUSER_QUERY });
		console.log(data);
		const cartItemId = payload.data.removeFromCart.id;
		data.self.cart = data.self.cart.filter(
			cartItem => cartItem.id !== cartItemId
		);
		cache.writeQuery({ query: CURRENTUSER_QUERY, data });
	};
	render() {
		return (
			<Mutation
				mutation={REMOVE_FROM_CART_MUTATION}
				variables={{ id: this.props.id }}
				update={this.update}
				optimisticResponse={{
					__typename: 'Mutation',
					removeFromCart: {
						__typename: 'CartItem',
						id: this.props.id,
					},
				}}
			>
				{(removeFromCart, { loading, error }) => (
					<RemoveButton
						disabled={loading}
						onClick={() => {
							removeFromCart().catch(err => alert(err.message));
						}}
						title="DeleteItem"
					>
						&times;
					</RemoveButton>
				)}
			</Mutation>
		);
	}
}

export default RemoveFromCart;
