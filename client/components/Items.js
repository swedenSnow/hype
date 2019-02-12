import React from 'react';
//import Link from 'next/link';
import Item from './Item';

const testItem1 = {
	id: 0,
	name: 'Test Item #1',
	price: 1000,
	description: 'This is jsut for testing',
};

const testItem2 = {
	id: 1,
	name: 'Test Item #2',
	price: 2000,
	description: 'This is jsut for testing',
};

const testItem3 = {
	id: 2,
	name: 'Test Item #3',
	price: 3000,
	description: 'This is jsut for testing',
};

const itemsArray = [testItem1, testItem2, testItem3];

// ToDo: map test items meanwhile...
// Next Link and send in the item? or the whole god damn array... dunno.

const Items = props => (
	<div>
		Some Items here...
		<Item />
	</div>
);

export default Items;
