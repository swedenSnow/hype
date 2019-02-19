import React from 'react';
import Item from './Item';

const testItem1 = {
	id: 0,
	title: 'Test Item #1',
	price: 1000,
	image: '',
	description: 'This is just for testing',
};

const testItem2 = {
	id: 1,
	title: 'Test Item #2',
	price: 2000,
	image: '',
	description: 'This is just for testing',
};

const testItem3 = {
	id: 2,
	title: 'Test Item #3',
	price: 3000,
	image: '',
	description: 'This is just for testing',
};

const itemsArray = [testItem1, testItem2, testItem3];

// ToDo: map test items meanwhile...
// Next Link and send in the item? or the whole god damn array... dunno.

const Items = props => (
	<div>
		{itemsArray.map(item => {
			return <Item key={item.id} item={item} />;
		})}
	</div>
);

export default Items;
