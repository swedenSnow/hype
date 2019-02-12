import React, { Component } from 'react';
import { SigninForm } from './styles/SigninForm';

class Signin extends Component {
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
					<button disabled>Sign In</button>
				</form>
			</SigninForm>
		);
	}
}

export default Signin;
