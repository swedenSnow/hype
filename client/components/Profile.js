import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalf, faStar } from '@fortawesome/free-solid-svg-icons';

const GETUSER_QUERY = gql`
	query GETUSER_QUERY($id: ID!) {
		user(id: $id) {
			id
			userName
			firstName
			lastName
		}
	}
`;

class Profile extends Component {
	createRating = realRating => {
		let roundedRating = Math.round(realRating * 2) / 2;
		let ratingStars = [];

		while (roundedRating > 0) {
			if (roundedRating >= 1) {
				ratingStars.push(
					<FontAwesomeIcon
						key={'star' + roundedRating}
						icon={faStar}
					/>
				);
			} else {
				ratingStars.push(
					<FontAwesomeIcon key={'starHalf'} icon={faStarHalf} />
				);
			}

			roundedRating--;
		}

		return ratingStars;
	};

	render() {
		const realRating = 4.7;
		return (
			<Query
				query={GETUSER_QUERY}
				variables={{
					id: this.props.id,
				}}
			>
				{({ data, loading, error }) => {
					return (
						<div>
							<strong>Username: </strong>
							{data.user.userName}
							<br />
							<strong>Rating: </strong>
							{this.createRating(realRating)} - {realRating}
							<hr />
							<strong>Name: </strong> {data.user.firstName}{' '}
							{data.user.lastName}
							<br />
							<hr />
							<strong>Items purchased: </strong>??
							<br />
							<strong>Items sold: </strong>??
							<br />
							<strong>Items for sale: </strong>??
							<hr />
						</div>
					);
				}}
			</Query>
		);
	}
}

export default Profile;
