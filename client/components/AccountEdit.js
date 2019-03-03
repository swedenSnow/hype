import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { AccountEditForm } from './styles/AccountEditForm';
import StyledButton from './styles/StyledButton';

const USERDETAILS_QUERY = gql`
	query {
		self {
			firstName
			lastName
		}
	}
`;

class AccountEdit extends Component {
	state = {
		firstName: '',
		lastName: '',
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	render() {
		return (
			<Query query={USERDETAILS_QUERY}>
				{({ data, error, loading }) => {
					if (loading) return <p>Loading...</p>;
					console.log(data);
					return (
						<AccountEditForm>
							<form>
								<fieldset>
									<label>
										<strong>First Name: </strong>
										<input
											type="text"
											name="firstName"
											defaultValue={data.self.firstName}
											onChange={this.handleChange}
										/>
									</label>
									<label>
										<strong>Last Name: </strong>
										<input
											type="text"
											name="lastName"
											defaultValue={data.self.lastName}
											onChange={this.handleChange}
										/>
									</label>
									<StyledButton>Update details</StyledButton>
								</fieldset>
							</form>
						</AccountEditForm>
					);
				}}
			</Query>
		);
	}
}

export default AccountEdit;
