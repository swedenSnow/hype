import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItem = styled.div`
	box-shadow: ${props => props.theme.boxShadow};
	padding: ${props => props.theme.medium};
	p {
		font-family: 'Raleway', sans-serif;
	}

	strong {
		font-family: 'Ubuntu', sans-serif;
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
					<p>
						<strong>Title:</strong>
						<Link
							href={{ pathname: '/item', query: { id: item.id } }}
						>
							<a>{item.title}</a>
						</Link>
					</p>
					<p>
						<strong>Price:</strong>
						{item.price}
					</p>
					<p>
						<strong>Description:</strong>
						{item.description}
					</p>
					<p>
						<img src={item.image} alt={item.title} width="200" />
					</p>
				</ListItem>
			</div>
		);
	}
}

export default Item;
