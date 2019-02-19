import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import User from './User';
import Signout from './Signout';

const NavStyled = styled.nav`
	display: flex;
	align-items: center;
	font-size: ${props => props.theme.medium};
	font-family: 'Raleway', sans-serif;

	ul {
		list-style-type: none;
		li {
			display: inline;
			padding-right: 1em;
		}
	}
	@media (max-width: 800px) {
		font-size: ${props => props.theme.root};
	}
`;

const loggedIn = false;

const Nav = () => (
	<User>
		{({ data: { self } }) => {
			return (
				<NavStyled>
					<ul>
						<li>
							<Link prefetch href="/">
								<a>Home</a>
							</Link>
						</li>
						<li>
							<Link href="/shop">
								<a>Shop</a>
							</Link>
						</li>
						<li>
							<Link href="/item">
								<a>Test Item</a>
							</Link>
						</li>
						{self && (
							<>
								<li>
									<Link href="/sell">
										<a>Sell Item</a>
									</Link>
								</li>
								<li>
									<Link href="/account">
										<a>My Account</a>
									</Link>
								</li>
								<Signout />
							</>
						)}
						{!self && (
							<>
								<li>
									<Link href="/signin">
										<a>Sign In</a>
									</Link>
								</li>
								<li>
									<Link href="/signup">
										<a>Sign Up</a>
									</Link>
								</li>
							</>
						)}
					</ul>
				</NavStyled>
			);
		}}
	</User>
);

export default Nav;
