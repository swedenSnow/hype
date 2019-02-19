import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Head from 'next/head';
import gql from 'graphql-tag';
import AddToCart from './AddToCart';
import Link from 'next/link';

const SINGLEITEM_QUERY = gql`
	query SINGLEITEM_QUERY($id: ID!) {
		item(where: { id: $id }) {
			id
			title
			description
			image
			price
			user {
				id
				email
			}
		}
	}
`;

class SingleItem extends Component {
	render() {
		return (
			<Query
				query={SINGLEITEM_QUERY}
				variables={{
					id: this.props.id,
				}}
			>
				{({ data, loading, error }) => {
					if (loading) return <p>Loading...</p>;
					if (error) {
						return <p>Error: {error.message}</p>;
					}
					if (!data.item)
						return <p>No ItemFound for {this.props.id}</p>;

					const { item } = data;
					return (
						<div>
							<Head>
								<title>Hype-gear || {item.title} </title>
							</Head>
							<p>
								<strong>Title:</strong> {item.title}
							</p>
							<p>
								<strong>Price:</strong> {item.price}
							</p>
							<img
								width="200px" //thats a huge ass picture
								src={item.image}
								alt={item.title}
							/>
							<p>
								<strong>Description:</strong>
								<br />
								{item.description}
							</p>
							<p>
								<strong>By User ID: </strong>
								<Link
									href={{
										pathname: '/user',
										query: { id: item.user.id },
									}}
								>
									<a>{item.user.id}</a>
								</Link>
							</p>
							<AddToCart />
							<hr />
							<Link href="/shop">
								<a>Back to Items</a>
							</Link>
						</div>
					);
				}}
			</Query>
		);
	}
}

export default SingleItem;
