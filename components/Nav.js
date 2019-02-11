import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavStyled = styled.nav`
	display: flex;
	align-items: center;

	ul {
		list-style-type: none;
		li {
			display: inline;
			padding-right: 1em;
		}
	}
`;

const Nav = () => (
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
                <Link href="/account">
                    <a>My Account</a>
                </Link>
            </li>
			<li>
                <Link href="/signin">
                    <a>Sign In</a>
                </Link>
			</li>
			<li>
                <Link href="/item">
                    <a>Test Item</a>
                </Link>
			</li>
        </ul>
    </NavStyled>
);

export default Nav;
