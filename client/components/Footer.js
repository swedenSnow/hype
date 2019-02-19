import styled from 'styled-components';

const FooterStyled = styled.footer`
	background-color: ${props => props.theme.blue};
	box-shadow: ${props => props.theme.boxShadow};
	color: #fff;
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 5rem;
	padding: 1rem;
	.content {
		height: 2rem;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}
`;

const Footer = () => (
	<FooterStyled>
		<div className="content">This could be a footer text lol.</div>
		<div className="content">
			With Links? Another Nav? Is this real life?
		</div>
	</FooterStyled>
);

export default Footer;
