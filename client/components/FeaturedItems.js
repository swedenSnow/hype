import React, { Component } from 'react';
import styled from 'styled-components';

const StyledFeaturedItems = styled.div`
	width: 100%;
	display: flex;
	flex: 1;
	flex-flow: row nowrap;
	height: 5rem;

	.featured-item {
		display: flex;
		flex: 1 1 0;
		border: 1px solid;
		border-left: 0;
		align-items: center;
		justify-content: center;
	}

	.featured-item:last-of-type {
		border-right: 0;
	}
`;

class FeaturedItems extends Component {
	render() {
		return (
			<StyledFeaturedItems>
				<div className="featured-item">An Item</div>
				<div className="featured-item">Another Item</div>
				<div className="featured-item">A Third Item</div>
			</StyledFeaturedItems>
		);
	}
}

export default FeaturedItems;
