import styled from 'styled-components';

const StyledButton = styled.button`
	background-color: ${props => props.theme.blue};
	color: ${props => props.theme.white};
	border: 0;
	border-radius: 3px;
	padding: 0.8rem 4rem;
	text-transform: uppercase;
	transition: all 0.4s ease;
	-webkit-transition: all 0.4s ease-in-out;
	font-size: ${props => props.theme.medium};
	&[disabled] {
		opacity: 0.5;
	}
	&:hover {
		background: ${props => props.theme.white};
		color: ${props => props.theme.black};
		border: 1px solid black;
	}
	a {
		color: ${props => props.theme.white};
	}
	&:hover a {
		color: ${props => props.theme.black};
	}
`;

export default StyledButton;
