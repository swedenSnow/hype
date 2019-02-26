import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import User from './User';
import Signout from './Signout';
import CartCount from './CartCount';

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

	button {
		background: transparent;
		border: none;
		outline: none;
		cursor: pointer;
	}

	@media (max-width: 800px) {
		font-size: ${props => props.theme.root};
	}
`;

const Nav = () => (
	<User>
		{({ data: { self } }) => {
			console.log(self);
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
							<Link href="/faq">
								<a>FAQ</a>
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
						{
							<>
								<li>
									<Link href="/cart">
										<a>
											<FontAwesomeIcon
												icon={faShoppingCart}
											/>
											<CartCount
												count={self.cart.reduce(
													(tally, cartItem) =>
														tally +
														cartItem.quantity,
													0
												)}
											/>
										</a>
									</Link>
								</li>
							</>
						}
					</ul>
				</NavStyled>
			);
		}}
	</User>
);

export default Nav;
