import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Link from 'next/link';
import Router from 'next/router';
import gql from 'graphql-tag';
import { CURRENTUSER_QUERY } from './User';
import { SigninForm } from './styles/SigninForm';
import StyledButton from './styles/StyledButton';
import ErrorMsg from './ErrorMsg';
import Form from './styles/Form';
import FormContainer from './styles/FormContainer';

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
				awaitRefetchQueries={true}
			>
				{(signin, { error, loading, called, data }) => {
					if (loading) return <p>Loading...</p>;
					if (!error && !loading && called) {
						Router.push({
							pathname: '/account',
						});
						return (
							<p>
								You are now logged in redirecting you to your
								account page.
							</p>
						);
					}
					return (
						<FormContainer>
							{error && <ErrorMsg error={error} />}
							<SigninForm>
								<Form
									method="post"
									onSubmit={async e => {
										e.preventDefault();
										const res = await signin();
										this.setState({
											email: '',
											password: '',
										});

										console.log(res);
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
								</Form>
								<div>
									<Link href="/forgotpassword">
										<a>
											Click here if you have forgotten
											your password.
										</a>
									</Link>
								</div>
							</SigninForm>
						</FormContainer>
					);
				}}
			</Mutation>
		);
	}
}

export default Signin;
