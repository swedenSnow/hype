import React, { Component } from 'react';
import { StyledButton } from './styles/Button';

class AddToCart extends Component {
	addToCart = () => {
		alert('One day this will work?');
	};

	render() {
		return (
			<StyledButton onClick={this.addToCart}>Add To Cart</StyledButton>
		);
	}
}

export default AddToCart;
