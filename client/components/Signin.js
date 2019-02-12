import React, { Component } from 'react';
import { SigninForm } from './styles/SigninForm';

class Signin extends Component {
	render() {
		return (
			<SigninForm>
				<form method="post">
					<fieldset>
						<label htmlFor="email">
							E-mail:
							<input type="text" name="email" />
						</label>
						<label htmlFor="password">
							Password:
							<input type="password" name="password" />
						</label>
						<button disabled>Sign In</button>
					</fieldset>
				</form>
			</SigninForm>
		);
	}
}

export default Signin;
