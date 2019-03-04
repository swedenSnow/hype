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
	padding: 0 2rem 0 0;
	text-transform: uppercase;
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
