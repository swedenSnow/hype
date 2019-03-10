import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';

const StyledAbout = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	height: 100%;
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
	padding: 6rem 0 6rem 0;
	& > * {
		font-weight: 200;
	}
	& h4 {
		font-weight: 500;
	}

	.left-container {
		text-align: left;
		max-width: 42%;
		align-self: flex-start;
		margin-right: 4rem;
		& img {
			margin-top: ${props => props.theme.XL};
		}
	}
	.right-container {
		max-width: 42%;
		align-self: flex-start;
		text-align: left;
		& img {
			margin-bottom: ${props => props.theme.XL};
		}
	}
	.title {
		min-width: 87%;
		align-self: flex-start;
		text-align: left;
		padding-bottom: 4rem;
		& h1,
		h2 {
			font-weight: 100;
		}
	}
	.story {
		text-align: center;
	}
	.image {
		flex-grow: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		object-fit: contain;
	}
	.image {
		display: flex;
		width: 100%;
		justify-content: flex-start;
		img {
			width: 100%;
			object-fit: contain;
		}
	}
	@media only screen and (max-width: 650px) {
		.left-container,
		.right-container {
			min-width: 80%;

			img {
				margin: 2rem 0 2rem 0;
			}
		}
		.left-container {
			margin-right: 0;
		}
		.right-container {
			img {
				display: none;
			}
		}
		.title {
			text-align: center;
			padding-bottom: 2rem;
		}
	}
`;
class AboutUs extends Component {
	render() {
		return (
			<StyledAbout>
				<div className="title">
					<h2>About Us</h2>
				</div>
				<div className="left-container">
					<p>
						Hype-gear is Sweden’s first and only exclusive sneaker
						and streetwear shop. In our webshop we provide a wide
						range of exclusive sneakers that you won’t find at any
						regular sneaker store, alongside rare clothing and
						collectibles from some of the biggest streetwear brands
						in the world. We offer not only the latest and most
						sought after sneakers, but also timeless garments from
						older streetwear collections. The products we serve are
						both brand new or in pristine second-hand condition.
						Every item sold at Hype-gear is guaranteed authentic.
						Check us out on Instagram @HypeGear to stay updated on
						any news, products and upcoming events
					</p>
					<br />
					<div className="image">
						<img
							src="https://res.cloudinary.com/swedensnow/image/upload/v1552218354/detail_streetWear_tan07n.jpg"
							alt="streetwear"
						/>
					</div>
				</div>

				<div className="right-container">
					<div className="image">
						<img
							src="https://res.cloudinary.com/swedensnow/image/upload/v1552218354/streetwear_store_ttbrxk.jpg"
							alt="streetwear"
						/>
					</div>
					<br />

					<div>
						<div className="title story">
							<h2>Our Story</h2>
						</div>
						<p>
							Hype-gear&copy; began with a growing passion for
							sneakers and streetwear. After meeting a lot of
							different people sharing a mutual interest in
							sneaker campouts and Swedish sneaker forums, we
							realized that we were participating in something
							bigger than simply hunting for a particular shoe. It
							became evident that we were taking part in a
							culture. This culture was continuously evolving
							through the connection of people and their passion
							and interest for sneakers and streetwear. With this
							growing culture we realized that Sweden was missing
							a place for this community to come together and
							connect. This is when Hype-gear was created. The
							first and honestly, the best exclusive sneaker and
							streetwear shop in Sweden.
							<br />
							<br />
							<br />A place where people can buy, sell, and trade
							the biggest streetwear brands in the world while
							connecting with a community sharing the same passion
						</p>
					</div>
				</div>
			</StyledAbout>
		);
	}
}

export default AboutUs;
