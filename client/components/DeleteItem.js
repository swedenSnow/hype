import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import { withRouter } from 'next/router';
import gql from 'graphql-tag';
import StyledButton from './styles/StyledButton';

const DELETEITEM_MUTATION = gql`
	mutation DELETEITEM_MUTATION($id: ID!) {
		deleteItem(id: $id) {
			message
		}
	}
`;

class DeleteItem extends Component {
	render() {
		return (
			<Mutation
				mutation={DELETEITEM_MUTATION}
				variables={{ id: this.props.id }}
			>
				{(deleteItem, { error }) => (
					<StyledButton
						onClick={async () => {
							if (
								confirm(
									'Are you sure you want to delete this item?'
								)
							) {
								const res = await deleteItem();
								Router.push({
									pathname: '/shop',
								});
							}
						}}
					>
						{this.props.children}
					</StyledButton>
				)}
			</Mutation>
		);
	}
}

export default withRouter(DeleteItem);
