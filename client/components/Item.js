import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AddToCart from './AddToCart';
import formatMoney from '../lib/formatMoney';

const ListItem = styled.div`
	box-shadow: ${props => props.theme.boxShadow};
	padding: ${props => props.theme.medium};
	font-size: ${props => props.theme.medium};
	p {
		font-family: 'Raleway', sans-serif;
	}

	strong {
		font-family: 'Ubuntu', sans-serif;
	}

	.sold {
		position: relative;
		width: 100%;
		height: 100%;
		&::after {
			content: 'SOLD';
			position: absolute;
			top: 80px;
			left: 20px;
			z-index: 1;
			font-family: Arial, sans-serif;
			-webkit-transform: rotate(-45deg);
			-moz-transform: rotate(-45deg);
			-ms-transform: rotate(-45deg);
			-o-transform: rotate(-45deg);
			transform: rotate(-45deg);
			font-size: 64px;
			color: #c00;
			background: #fff;
			border: solid 4px #c00;
			padding: 10px;
			border-radius: 10px;
			zoom: 1;
			filter: alpha(opacity=20);
			opacity: 0.2;
			-webkit-text-shadow: 0 0 2px #c00;
			text-shadow: 0 0 2px #c00;
			box-shadow: 0 0 2px #c00;
		}

		img {
			-webkit-filter: grayscale(100%);
			filter: grayscale(100%);
		}
	}
`;

class Item extends Component {
	static propTypes = {
		item: PropTypes.object.isRequired,
	};

	render() {
		const { item } = this.props;
		return (
			<div>
				<ListItem>
					<div className={item.sold ? 'sold' : ''}>
						<p>
							<strong>Title: </strong>
							<Link
								href={{
									pathname: '/item',
									query: { id: item.id },
								}}
							>
								<a>{item.title}</a>
							</Link>
						</p>
						<p>
							<strong>Price: </strong>
							{formatMoney(item.price)}
						</p>
						<p>
							<strong>Description: </strong>
							{item.description}
						</p>
						<p>
							<Link
								href={{
									pathname: '/item',
									query: { id: item.id },
								}}
							>
								<a>
									<img
										src={item.image}
										alt={item.title}
										width="200"
									/>
								</a>
							</Link>
						</p>
						{!item.sold && <AddToCart id={item.id} />}
					</div>
				</ListItem>
			</div>
		);
	}
}

export default Item;
