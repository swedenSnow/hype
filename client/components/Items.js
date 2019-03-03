import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Item from './Item';
import styled from 'styled-components';

const ListItemsTitle = styled.div`
	text-align: center;
	text-transform: uppercase;
	color: ${props => props.theme.blue};
	font-family: 'Ubuntu', sans-serif;
`;

const ALLITEMS_QUERY = gql`
	query ALLITEMS_QUERY {
		items {
			id
			title
			price
			description
			image
			sold
		}
	}
`;

class Items extends Component {
	render() {
		return (
			<Query query={ALLITEMS_QUERY}>
				{({ data, loading, error }) => {
					const items = data.items;
					return (
						<div>
							<ListItemsTitle>
								<h2>All items for sale</h2>
							</ListItemsTitle>
							{items.map(item => (
								<Item key={item.id} item={item} />
							))}
						</div>
					);
				}}
			</Query>
		);
	}
}

export default Items;
