import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Item from './Item';

const ALLITEMS_QUERY = gql`
	query ALLITEMS_QUERY {
		items {
			id
			title
			price
			description
			image
		}
	}
`;

class Items extends Component {
	render() {
		return (
			<Query query={ALLITEMS_QUERY}>
				{({ data, loading, error }) => {
					const items = data.items;
					console.log(data);
					return (
						<div>
							{items.map(item => (
								<Item item={item} />
							))}
						</div>
					);
				}}
			</Query>
		);
	}
}

export default Items;
