import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { AccountEditForm } from './styles/AccountEditForm';
import StyledButton from './styles/StyledButton';

const USERDETAILS_QUERY = gql`
	query {
		self {
			id
			firstName
			lastName
		}
	}
`;

const UPDATEUSER_MUTATION = gql`
	mutation UPDATEUSER_MUTATION(
		$id: ID!
		$firstName: String
		$lastName: String
	) {
		updateUser(id: $id, firstName: $firstName, lastName: $lastName) {
			id
			userName
			firstName
			lastName
		}
	}
`;

class AccountEdit extends Component {
	state = {};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	updateUser = async (e, updateUserMutation, userId) => {
		e.preventDefault();
		console.log(userId);
		const res = await updateUserMutation({
			variables: {
				id: userId,
				...this.state,
			},
		});
	};

	render() {
		return (
			<Query query={USERDETAILS_QUERY}>
				{({ data, error, loading }) => {
					if (loading) return <p>Loading...</p>;
					const { self } = data;
					return (
						<Mutation
							mutation={UPDATEUSER_MUTATION}
							variables={this.state}
						>
							{(updateUser, { loading, error, called }) => {
								console.log(self);
								return (
									<AccountEditForm>
										{called && (
											<h3>User details updated!</h3>
										)}
										<form
											method="post"
											onSubmit={e =>
												this.updateUser(
													e,
													updateUser,
													self.id
												)
											}
										>
											<fieldset>
												<label>
													<strong>First Name:</strong>
													<input
														type="text"
														name="firstName"
														defaultValue={
															self.firstName
														}
														onChange={
															this.handleChange
														}
													/>
												</label>
												<label>
													<strong>Last Name:</strong>
													<input
														type="text"
														name="lastName"
														defaultValue={
															self.lastName
														}
														onChange={
															this.handleChange
														}
													/>
												</label>
												<StyledButton>
													Update details
												</StyledButton>
											</fieldset>
										</form>
									</AccountEditForm>
								);
							}}
						</Mutation>
					);
				}}
			</Query>
		);
	}
}

export default AccountEdit;
