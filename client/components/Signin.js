import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Link from 'next/link';
import gql from 'graphql-tag';
import { CURRENTUSER_QUERY } from './User';
import { SigninForm } from './styles/SigninForm';
import { StyledButton } from './styles/Button';
import ErrorMsg from './ErrorMsg';

const SIGNIN_MUTATION = gql`
	mutation SIGNIN_MUTATION($email: String!, $password: String!) {
		signin(email: $email, password: $password) {
			id
			email
			firstName
		}
	}
`;

class Signin extends Component {
	state = {
		email: '',
		password: '',
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	render() {
		return (
			<Mutation
				mutation={SIGNIN_MUTATION}
				variables={this.state}
				refetchQueries={[{ query: CURRENTUSER_QUERY }]}
			>
				{(signin, { error, loading }) => {
					if (loading) return <p>Loading...</p>;

					return (
						<div>
							<SigninForm>
								{error && <ErrorMsg error={error} />}
								<form
									method="post"
									onSubmit={async e => {
										e.preventDefault();
										await signin();
										this.setState({
											email: '',
											password: '',
										});
									}}
								>
									<fieldset>
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
										<StyledButton>Sign In</StyledButton>
									</fieldset>
								</form>
							</SigninForm>
							<div>
								<Link href="/forgotpassword">
									<a>
										Click here if you have forgotten your
										password.
									</a>
								</Link>
							</div>
						</div>
					);
				}}
			</Mutation>
		);
	}
}

export default Signin;
