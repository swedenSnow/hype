import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import ErrorMsg from './ErrorMsg';
import StyledButton from './styles/StyledButton';
import { StyledForm } from './styles/StyledForm';
import Form from './styles/Form';
import FormContainer from './styles/FormContainer';

const REQUESTRESET_MUTATION = gql`
	mutation REQUESTRESET_MUTATION($email: String!) {
		requestReset(email: $email) {
			message
		}
	}
`;

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
			<Mutation mutation={REQUESTRESET_MUTATION} variables={this.state}>
				{(reset, { error, loading, called }) => {
					return (
						<FormContainer>
							<StyledForm>
								<Form
									method="post"
									onSubmit={async e => {
										e.preventDefault();
										const res = await reset();
										console.log(res);
										this.setState({ email: '' });
									}}
								>
									<fieldset>
										{error && <ErrorMsg error={error} />}
										{!error && !loading && called && (
											<p>
												Success! Check your email for a
												reset link!
											</p>
										)}
										<label htmlFor="email">
											E-mail:
											<input
												type="text"
												name="email"
												value={this.state.email}
												onChange={this.handleChange}
											/>
										</label>
										<StyledButton>
											Get password reset link
										</StyledButton>
									</fieldset>
								</Form>
							</StyledForm>
						</FormContainer>
					);
				}}
			</Mutation>
		);
	}
}

export default ForgotPassword;
