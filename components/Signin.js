import React, { Component } from 'react';
import styled from 'styled-components';

const SigninForm = styled.div`
	width: 25%;
	form {
		label {
			display: block;
			margin-bottom: 0.5rem;
		}

		input {
			width: 100%;
			border: 1px solid black;
		}

		button {
			background-color: #000;
			color: #fff;
			border: 0;
			border-radius: 3px;
			padding: 0.5rem;
			float: right;
		}
	}
`;

class Signin extends Component {
	render() {
		return (
			<SigninForm>
				<form>
					<label htmlFor="email">
						E-mail:
						<input type="text" name="email" />
					</label>
					<label htmlFor="password">
						Password:
						<input type="password" name="password" />
					</label>
					<button>Sign In</button>
				</form>
			</SigninForm>
		);
	}
}

export default Signin;
