import Nav from './Nav';
import styled from 'styled-components';
import Link from 'next/link';

const HeaderStyled = styled.header`
	display: flex;
	align-items: center;
	flex-flow: row wrap;
	background-color: ${props => props.theme.white};
	margin-bottom: -1rem;
	padding: ${props => props.theme.XL};

	.logo {
		margin-left: 2rem;
		text-decoration: underline;
		width: 50%;
	}
`;

const Header = () => (
	<HeaderStyled>
		<div className="logo">
			<Link href="/">
				<a>
					<img src="../static/img/logo5.svg" alt="logo" width="210" />
				</a>
			</Link>
		</div>
		<Nav />
	</HeaderStyled>
);

export default Header;
