import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { CURRENTUSER_QUERY } from './User';

const SIGNOUT_MUTATION = gql`
	mutation SIGNOUT_MUTATION {
		signout {
			message
		}
	}
`;

const SignoutButton = styled.button`
	display: inline-block;
	text-decoration: none;
	letter-spacing: 1px;
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
		-webkit-transition: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) all;
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
`;

const Signout = props => (
	<Mutation
		mutation={SIGNOUT_MUTATION}
		refetchQueries={[{ query: CURRENTUSER_QUERY }]}
	>
		{signout => <SignoutButton onClick={signout}>Sign Out</SignoutButton>}
	</Mutation>
);

export default Signout;
