import React, { Component } from 'react';

class Item extends Component {
	render() {
		const { item } = this.props;
		console.log(item);
		return (
			<div>
				<p>
					<strong>Title:</strong>
					{item.title}
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
					<img src={item.image} alt={item.title} />
				</p>
			</div>
		);
	}
}

export default Item;
