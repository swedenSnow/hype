import styled from 'styled-components';

const Form = styled.form`
	box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
	background: rgba(0, 0, 0, 0.02);
	border: 5px solid white;
	font-size: 1.5rem;
	line-height: 1.5;
	font-weight: 600;
	font-family: 'Ubuntu', sans-serif;
	label {
		display: block;
		margin-bottom: 1rem;
		font-size: ${props => props.theme.medium};
	}
	input,
	textarea,
	select {
		width: 100%;
		padding: 0.5rem;
		font-size: ${props => props.theme.root};
		border: 1px solid black;
		&:focus {
			outline: 0;
			border-color: ${props => props.theme.lightBlue};
			/* background: ${props => props.theme.offWhite}; */
		}
	}
	button,
	input[type='submit'] {
		width: auto;
		background: ${props => props.theme.blue};
		color: white;
		border: 0;
		font-size: ${props => props.theme.medium};
		font-weight: 600;
		margin-top: ${props => props.theme.small};
		padding: 0.5rem 1.2rem;
	}
	fieldset {
		border: 0;
		padding: 0;

		&[disabled] {
			opacity: 0.5;
		}
	}
`;

export default Form;
