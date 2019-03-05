import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import { SellItemForm } from './styles/SellItemForm';
import PleaseSignIn from './PleaseSignIn';
import StyledButton from './styles/StyledButton';

const SINGLEITEM_QUERY = gql`
	query SINGLEITEM_QUERY($id: ID!) {
		item(where: { id: $id }) {
			id
			title
			description
			price
		}
	}
`;

const UPDATEITEM_MUTATION = gql`
	mutation UPDATEITEM_MUTATION(
		$id: ID!
		$title: String
		$description: String
		$price: Int
	) {
		updateItem(
			id: $id
			title: $title
			description: $description
			price: $price
		) {
			id
			title
			description
			price
		}
	}
`;

class UpdateItem extends Component {
	state = {};

	handleChange = e => {
		const { name, type, value } = e.target;
		const val = type === 'number' ? Number(value) : value;
		this.setState({ [name]: val });
	};

	updateItem = async (e, updateItemMutation) => {
		e.preventDefault();
		const res = await updateItemMutation({
			variables: {
				id: this.props.id,
				...this.state,
			},
		});
	};

	render() {
		return (
			<PleaseSignIn message="Please sign in to be able to update an item.">
				<Query
					query={SINGLEITEM_QUERY}
					variables={{ id: this.props.id }}
				>
					{({ data, loading }) => {
						if (loading) return <p>Loading</p>;
						if (!data.item)
							return <p>No Item Found for ID: {this.props.id}</p>;
						return (
							<Mutation
								mutation={UPDATEITEM_MUTATION}
								variables={this.state}
							>
								{(updateItem, { loading, error }) => (
									<SellItemForm>
										<form
											method="post"
											onSubmit={e =>
												this.updateItem(e, updateItem)
											}
										>
											<fieldset>
												<label htmlFor="title">
													Item:
													<input
														type="text"
														name="title"
														required
														defaultValue={
															data.item.title
														}
														onChange={
															this.handleChange
														}
													/>
												</label>
												<label htmlFor="price">
													Price:
													<input
														type="number"
														name="price"
														required
														defaultValue={
															data.item.price
														}
														onChange={
															this.handleChange
														}
													/>
												</label>
												<label htmlFor="description">
													Description
													<textarea
														name="description"
														required
														defaultValue={
															data.item
																.description
														}
														onChange={
															this.handleChange
														}
													/>
												</label>
												<StyledButton>
													Update Item
												</StyledButton>
											</fieldset>
										</form>
									</SellItemForm>
								)}
							</Mutation>
						);
					}}
				</Query>
			</PleaseSignIn>
		);
	}
}

export default UpdateItem;
