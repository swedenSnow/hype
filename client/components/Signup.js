import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENTUSER_QUERY } from './User';
import { SignupForm } from './styles/SignupForm';
import StyledButton from './styles/StyledButton';
import ErrorMsg from './ErrorMsg';
import FormContainer from './styles/FormContainer';
import Form from './styles/Form';

const SIGNUP_MUTATION = gql`
	mutation SIGNUP_MUTATION(
		$userName: String!
		$email: String!
		$password: String!
		$confirmPassword: String!
	) {
		signup(
			userName: $userName
			email: $email
			password: $password
			confirmPassword: $confirmPassword
		) {
			id
			userName
			email
			firstName
		}
	}
`;

class Signup extends Component {
	state = {
		userName: '',
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

					return (
						<FormContainer>
							<SignupForm>
								{error && <ErrorMsg error={error} />}
								<Form
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
										<label htmlFor="userName">
											Username:
											<input
												type="text"
												name="userName"
												value={this.state.userName}
												onChange={this.handleChange}
											/>
										</label>
										<label htmlFor="email">
											E-mail:
											<input
												type="email"
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
												value={
													this.state.confirmPassword
												}
												onChange={this.handleChange}
											/>
										</label>
										<StyledButton>Sign Up</StyledButton>
									</fieldset>
								</Form>
							</SignupForm>
						</FormContainer>
					);
				}}
			</Mutation>
		);
	}
}

export default Signup;
