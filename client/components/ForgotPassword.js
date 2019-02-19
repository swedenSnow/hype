import React, { Component } from 'react';

class ForgotPassword extends Component {
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
						<button>Get password reset link</button>
					</fieldset>
				</form>
			</div>
		);
	}
}

export default ForgotPassword;
