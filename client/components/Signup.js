import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENTUSER_QUERY } from './User';
import { SignupForm } from './styles/SignupForm';
import { StyledButton } from './styles/Button';

const SIGNUP_MUTATION = gql`
	mutation SIGNUP_MUTATION(
		$email: String!
		$password: String!
		$confirmPassword: String!
	) {
		signup(
			email: $email
			password: $password
			confirmPassword: $confirmPassword
		) {
			id
			email
			firstName
		}
	}
`;

class Signup extends Component {
	state = {
		email: '',
		password: '',
		confirmPassword: '',
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	//Move SignUp Here on refactor
	signUp = async e => {};

	render() {
		return (
			<Mutation
				mutation={SIGNUP_MUTATION}
				variables={this.state}
				refetchQueries={[{ query: CURRENTUSER_QUERY }]}
			>
				{(signup, { error, loading }) => {
					if (loading) {
						return <p>Loading...</p>;
					}
					if (error) {
						return <p>Error: {error.message}</p>;
					}
					return (
						<SignupForm>
							<form
								method="post"
								onSubmit={async e => {
									e.preventDefault();
									await signup();
									this.setState({
										email: '',
										password: '',
										confirmPassword: '',
									});
								}}
							>
								<fieldset>
									<label htmlFor="email">
										E-mail:
										<input
											type="text"
											name="email"
											value={this.state.email}
											onChange={this.handleChange}
										/>
									</label>
									<label htmlFor="password">
										Password:
										<input
											type="password"
											name="password"
											value={this.state.password}
											onChange={this.handleChange}
										/>
									</label>
									<label htmlFor="confirmPassword">
										Confirm Password:
										<input
											type="password"
											name="confirmPassword"
											value={this.state.confirmPassword}
											onChange={this.handleChange}
										/>
									</label>
						      <StyledButton>Toggle Show Password!!</StyledButton>
						      <StyledButton disabled>Sign Up</StyledButton>
								</fieldset>
							</form>
						</SignupForm>
					);
				}}
			</Mutation>
		);
	}
}

export default Signup;
