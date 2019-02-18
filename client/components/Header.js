import Nav from './Nav';
import styled from 'styled-components';

const HeaderStyled = styled.header`
	display: flex;

	.logo {
		margin-left: 2rem;
		text-decoration: underline;
	}
`;

const Header = () => (
	<HeaderStyled>
		<div className="logo">
			<img src="../static/img/logo5.svg" alt="logo" width="270" />
		</div>
		<Nav />
	</HeaderStyled>
);

export default Header;
