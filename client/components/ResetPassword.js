import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { CURRENTUSER_QUERY } from './User';
import ErrorMsg from './ErrorMsg';

const RESET_MUTATION = gql`
	mutation RESET_MUTATION(
		$resetToken: String!
		$password: String!
		$confirmPassword: String!
	) {
		resetPassword(
			resetToken: $resetToken
			password: $password
			confirmPassword: $confirmPassword
		) {
			id
			email
		}
	}
`;

class ResetPassword extends Component {
	static propTypes = {
		resetToken: PropTypes.string.isRequired,
	};

	state = {
		password: '',
		confirmPassword: '',
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	render() {
		console.log(this.props.resetToken);
		return (
			<Mutation
				mutation={RESET_MUTATION}
				variables={{
					resetToken: this.props.resetToken,
					password: this.state.password,
					confirmPassword: this.state.confirmPassword,
				}}
				refetchQueries={[{ query: CURRENTUSER_QUERY }]}
			>
				{(reset, { error, loading, called }) => {
					return (
						<div>
							<form
								method="post"
								onSubmit={async e => {
									e.preventDefault();
									await reset();
									this.setState({
										password: '',
										confirmPassword: '',
									});
								}}
							>
								<fieldset>
									{error && <ErrorMsg error={error} />}
									<label htmlFor="password">
										Password:
										<input
											type="password"
											name="password"
											value={this.state.password}
											onChange={this.handleChange}
										/>
									</label>
									<label htmlFor="confirmPassword">
										Confirm Password:
										<input
											type="password"
											name="confirmPassword"
											value={this.state.confirmPassword}
											onChange={this.handleChange}
										/>
									</label>
									<button>Reset password</button>
								</fieldset>
							</form>
						</div>
					);
				}}
			</Mutation>
		);
	}
}

export default ResetPassword;
