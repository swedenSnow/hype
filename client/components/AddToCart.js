import React, { Component } from 'react';
import StyledButton from './styles/StyledButton';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENTUSER_QUERY } from './User';
import ErrorMsg from './ErrorMsg';

const ADD_TO_CART_MUTATION = gql`
	mutation addToCart($id: ID!) {
		# //! id of type ID! is going to run this on the server side below
		addToCart(id: $id) {
			id
			quantity
		}
	}
`;
class AddToCart extends Component {
	render() {
		const { id } = this.props;
		return (
			<Mutation
				mutation={ADD_TO_CART_MUTATION}
				variables={{
					id,
				}}
				refetchQueries={[{ query: CURRENTUSER_QUERY }]}
			>
				{(addToCart, { loading, error }) => {
					if (error) return <ErrorMsg error={error} />;
					return (
						<StyledButton disabled={loading} onClick={addToCart}>
							Add{loading && 'ing'} To Cart
						</StyledButton>
					);
				}}
			</Mutation>
		);
	}
}

export default AddToCart;
