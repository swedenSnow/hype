import styled from 'styled-components';

const SignupForm = styled.div`
	width: 25%;
	form {
		padding: 1rem;
		label {
			display: block;
			margin-bottom: 0.5rem;
			font-weight: 700;
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

export { SignupForm };
