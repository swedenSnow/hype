import React, { Component } from 'react';
import { SignupForm } from './styles/SignupForm';

class Signup extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		passwordAgain: '',
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	render() {
		return (
			<SignupForm>
				<form method="post">
					<fieldset>
						<label htmlFor="name">
							Name:
							<input
								type="text"
								name="name"
								value={this.state.name}
								onChange={this.handleChange}
							/>
						</label>
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
						<label htmlFor="passwordAgain">
							Password (again):
							<input
								type="password"
								name="passwordAgain"
								value={this.state.passwordAgain}
								onChange={this.handleChange}
							/>
						</label>
						Toggle Show Password!!
						<button disabled>Sign Up</button>
					</fieldset>
				</form>
			</SignupForm>
		);
	}
}

export default Signup;
