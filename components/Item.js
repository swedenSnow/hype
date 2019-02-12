import React, { Component } from 'react';
import AddToCart from './AddToCart';
import Link from 'next/link';

class Item extends Component {
	render() {
		return (
			<div>
				<p>
					<strong>Title:</strong> Test Item #1336
				</p>
				<p>
					<strong>Price:</strong> $19.99
				</p>
				<img
					width="200px" //thats a huge ass picture
					src="https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/15/P00324844.jpg"
					alt="Test Item Image"
				/>
				<AddToCart />
				<hr />
				<Link href="/shop">
					<a>Back to Items</a>
				</Link>
			</div>
		);
	}
}

export default Item;
