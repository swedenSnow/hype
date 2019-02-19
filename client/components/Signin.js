import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';
import { SigninForm } from './styles/SigninForm';

const SIGNIN_MUTATION = gql`
	mutation SIGNIN_MUTATION($email: String!, $password: String!) {
		signin(email: $email, password: $password) {
			id
			email
			name
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
			<div>
				<SigninForm>
					<form method="post">
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
							<button>Sign In</button>
						</fieldset>
					</form>
				</SigninForm>
				<div>
					<Link href="/forgotpassword">
						<a>Click here if you have forgotten your password.</a>
					</Link>
				</div>
			</div>
		);
	}
}

export default Signin;
