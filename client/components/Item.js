import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

class Item extends Component {
	static propTypes = {
		item: PropTypes.object.isRequired,
	};

	render() {
		const { item } = this.props;
		return (
			<div>
				<p>
					<strong>Title:</strong>
					<Link href={{ pathname: '/item', query: { id: item.id } }}>
						{item.title}
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
			</div>
		);
	}
}

export default Item;
