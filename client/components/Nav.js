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

			a {
				display: inline-block;
				text-decoration: none;
				letter-spacing: 1px;
				text-transform: uppercase;
				position: relative;
				-webkit-transition: all 0.4s ease;
				transition: all 0.4s ease;
				padding: 0 1rem;

				&:after {
					content: '';
					position: absolute;
					height: 2px;
					background-color: #193773;
					width: 0;
					left: 50%;
					bottom: 0;
					-webkit-transform: translateX(-50%);
					-ms-transform: translateX(-50%);
					transform: translateX(-50%);
					-webkit-transition: 0.5s
						cubic-bezier(0.68, -0.55, 0.265, 1.55) all;
					transition: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) all;
				}

				&:hover {
					color: #193773;

					&:after {
						width: 100%;
					}
				}
			}

			&.cart {
				color: #193773;
				a {
					&:after {
						content: none;
					}
				}
			}
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
								<CartCount
									count={self.cart.reduce(
										(total, cartItem) =>
											total + cartItem.quantity,
										0
									)}
								/>
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
								<li className="cart">
									<Link href="/cart">
										<a>
											<FontAwesomeIcon
												icon={faShoppingCart}
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
