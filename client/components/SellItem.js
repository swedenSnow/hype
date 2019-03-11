import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import { SellItemForm } from './styles/SellItemForm';
import PleaseSignIn from './PleaseSignIn';
import StyledButton from './styles/StyledButton';
import { withRouter } from 'next/router';

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

	uploadFile = async e => {
		const files = e.target.files;
		const data = new FormData();

		if (files.length === 0) {
			console.log('no file selected');
			return;
		}

		data.append('file', files[0]);
		data.append('upload_preset', 'hypegear');

		const res = await fetch(
			'https://api.cloudinary.com/v1_1/indiehjaerta/image/upload',
			{
				method: 'POST',
				body: data,
			}
		);

		const file = await res.json();
		console.log(file);

		if (file !== undefined) {
			this.setState({
				image: file.secure_url,
			});
		}
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
											type="file"
											name="image"
											placeholder="Upload an Image"
											onChange={this.uploadFile}
										/>
										{this.state.image && (
											<img
												src={this.state.image}
												alt="Upload preview"
												width="200px"
											/>
										)}
									</label>
									<label htmlFor="description">
										Description:
										<textarea
											name="description"
											value={this.state.description}
											onChange={this.handleChange}
										/>
									</label>
									<StyledButton> Sell Item </StyledButton>
								</fieldset>
							</form>
						</SellItemForm>
					)}
				</Mutation>
			</PleaseSignIn>
		);
	}
}

export default withRouter(SellItem);
