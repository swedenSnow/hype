import styled from 'styled-components';

const FooterStyled = styled.footer`
	background-color: #000;
	color: #fff;
	position: absolute;
	bottom: 0;
	width: 100%;
`;

const Footer = () => (
	<FooterStyled>
		<div>This could be a footer text lol.</div>
	</FooterStyled>
);

export default Footer;
