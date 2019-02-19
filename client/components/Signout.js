import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENTUSER_QUERY } from './User';

const SIGNOUT_MUTATION = gql`
	mutation SIGNOUT_MUTATION {
		signout {
			message
		}
	}
`;

const Signout = props => (
	<Mutation
		mutation={SIGNOUT_MUTATION}
		refetchQueries={[{ query: CURRENTUSER_QUERY }]}
	>
		{signout => <button onClick={signout}>Sign Out</button>}
	</Mutation>
);

export default Signout;
