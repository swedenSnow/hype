import React, { Component } from 'react';
import { SigninForm } from './styles/SigninForm';

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
						<button disabled>Sign In</button>
					</fieldset>
				</form>
			</SigninForm>
		);
	}
}

export default Signin;
