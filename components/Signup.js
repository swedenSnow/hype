import React, { Component } from 'react';
import { SigninForm } from './styles/SigninForm';

class Signup extends Component {
	render() {
		return (
			<SigninForm>
				<form method="post">
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
					<button>Sign Up</button>
				</form>
			</SigninForm>
		);
	}
}

export default Signup;
