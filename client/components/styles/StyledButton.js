import styled from 'styled-components';

const StyledButton = styled.button`
	background-color: ${props => props.theme.blue};
	color: ${props => props.theme.white};
	border: 0;
	border-radius: 3px;
	padding: 0.8rem 4rem;
	text-transform: uppercase;
	font-size: ${props => props.theme.medium};
	&[disabled] {
		opacity: 0.5;
	}
	a {
		color: ${props => props.theme.white};
	}
`;

export default StyledButton;
