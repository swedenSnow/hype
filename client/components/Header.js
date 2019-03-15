import Nav from './Nav';
import styled from 'styled-components';
import Link from 'next/link';

const HeaderStyled = styled.header`
	display: flex;
	align-items: center;
	flex-flow: row wrap;
	background-color: ${props => props.theme.white};
	justify-content: space-between;
	padding: 2rem 0 2rem 0;

	.logo {
		margin-left: 2rem;
		text-decoration: underline;
		width: 20%;
	}
`;

const Header = () => (
	<HeaderStyled>
		<div className="logo">
			<Link href="/">
				<a>
					<img src="../static/img/logo3.svg" alt="logo" width="190" />
				</a>
			</Link>
		</div>
		<Nav />
	</HeaderStyled>
);

export default Header;
