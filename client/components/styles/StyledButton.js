import styled from 'styled-components';

const StyledButton = styled.button`
	background-color: ${props => props.theme.blue};
	color: ${props => props.theme.white};
	border: 0;
	border-radius: 3px;
	padding: 0.8rem 0.5rem;

	/* transform: skew(-10deg);
	 */
	text-transform: uppercase;
	font-size: ${props => props.theme.root};
	&[disabled] {
		opacity: 0.5;
	}
`;

export default StyledButton;
