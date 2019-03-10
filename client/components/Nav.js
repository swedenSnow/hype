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
	align-items: flex-end;
	font-size: ${props => props.theme.root};
	font-family: 'Open', sans-serif;
	font-weight: 300;
	flex-wrap: wrap;
	width: calc(80%-4rem);

	ul {
		/* position: absolute;
		right: 0; */
		width: 100%;
		padding-right: 2rem;
		list-style-type: none;
		flex: 1;
		li {
			display: inline;
			/* padding-right: 1em; */

			a {
				display: inline-block;
				text-decoration: none;
				letter-spacing: 1px;
				/* text-transform: uppercase; */
				position: relative;
				-webkit-transition: all 0.4s ease;
				transition: all 0.4s ease;
				padding: 0 1rem;

				&:after {
					content: '';
					position: absolute;
					height: 2px;
					background-color: ${props => props.theme.black};
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
					color: ${props => props.theme.black};
					font-weight: 700;
					transform: skew(-15deg);
					&:after {
						width: 100%;
					}
				}
			}

			&.cart {
				color: ${props => props.theme.offWhite};
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
		{({ data: { self } }) => (
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
						<Link href="/aboutus">
							<a>About Us</a>
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
							{
								<li className="cart">
									<Link href="/cart">
										<a>
											<FontAwesomeIcon
												icon={faShoppingCart}
											/>
											<CartCount
												count={self.cart.reduce(
													(total, cartItem) =>
														total +
														cartItem.quantity,
													0
												)}
											/>
										</a>
									</Link>
								</li>
							}
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
		)}
	</User>
);

export default Nav;
