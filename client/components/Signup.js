import React, { Component } from 'react';
import { SignupForm } from './styles/SignupForm';

class Signup extends Component {
	render() {
		return (
			<SignupForm>
				<form method="post">
					<fieldset>
						<label htmlFor="name">
							Name:
							<input type="text" name="name" />
						</label>
						<label htmlFor="email">
							E-mail:
							<input type="text" name="email" />
						</label>
						<label htmlFor="password">
							Password:
							<input type="password" name="password" />
						</label>
						<label htmlFor="password-again">
							Password (again):
							<input type="password" name="password-again" />
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
