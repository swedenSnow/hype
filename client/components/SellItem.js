import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import { SellItemForm } from './styles/SellItemForm';
import PleaseSignIn from './PleaseSignIn';

const CREATEITEM_MUTATION = gql`
	mutation CREATEITEM_MUTATION(
		$title: String!
		$description: String!
		$price: Int!
		$image: String!
	) {
		createItem(
			title: $title
			description: $description
			price: $price
			image: $image
		) {
			id
		}
	}
`;

class SellItem extends Component {
	state = {
		title: '',
		price: '',
		image: '',
		description: '',
	};

	handleChange = e => {
		const { name, type, value } = e.target;
		const val = type === 'number' ? Number(value) : value;
		this.setState({ [name]: val });
	};

	render() {
		return (
			<PleaseSignIn message="Please sign in to be able to sell an item.">
				<Mutation mutation={CREATEITEM_MUTATION} variables={this.state}>
					{(createItem, { loading, error }) => (
						<SellItemForm>
							<form
								method="post"
								onSubmit={async e => {
									e.preventDefault();
									const res = await createItem();

									Router.push({
										pathname: '/item',
										query: { id: res.data.createItem.id },
									});
								}}
							>
								<fieldset>
									<label htmlFor="title">
										Item:
										<input
											type="text"
											name="title"
											value={this.state.title}
											onChange={this.handleChange}
										/>
									</label>
									<label htmlFor="price">
										Price:
										<input
											type="number"
											name="price"
											value={this.state.price}
											onChange={this.handleChange}
										/>
									</label>

									<label htmlFor="image">
										Image:
										<input
											type="text"
											name="image"
											value={this.state.image}
											onChange={this.handleChange}
										/>
										"Välj fil"-knappen på höger sida plz -
										<a href="https://stackoverflow.com/questions/18917710/how-do-i-position-the-file-input-button-on-the-right-hand-side-inside-the-textfi">
											Fix it
										</a>
									</label>
									<label htmlFor="description">
										Description
										<textarea
											name="description"
											value={this.state.description}
											onChange={this.handleChange}
										/>
									</label>
									<button>Sell Item</button>
								</fieldset>
							</form>
						</SellItemForm>
					)}
				</Mutation>
			</PleaseSignIn>
		);
	}
}

export default SellItem;
