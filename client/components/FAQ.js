import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';

import Footer from './Footer';

const StyledFAQ = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	height: 80vh;
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
	}
	.right-container {
		max-width: 42%;
		align-self: flex-start;
		text-align: left;
	}
	.title {
		min-width: 100%;
		align-self: center;
		text-align: center;
		padding-bottom: 4rem;
		& h1 {
			font-weight: 100;
		}
	}
	.logo {
		left: 1%;
	}
`;

class FAQ extends Component {
	render() {
		return (
			<>
				<StyledFAQ>
					<div className="title">
						<h1>FAQ</h1>
					</div>
					<div className="left-container">
						<h4>What makes Hype-gear&copy; diffrent ?</h4>
						<p>
							At Hype-gear we offer only the best and most limited
							streetwear and sneakers in the world. The range of
							exclusivity and diversity amongst our product is
							something we strive for. On our website you can find
							sneakers and clothing that you will not find at any
							other regular streetwear store.
						</p>
						<br />

						<h4>What determines the condition of your items?</h4>
						<p>
							At Hype-gear we grade the condition of items in a
							scale:
						</p>
						<ul>
							<li>Dead Stock (Brand new)</li>
							<li>Execellent</li>
							<li>Very Good</li>
							<li>Fair</li>
							<li>Poor</li>
						</ul>

						<h4>What determines the price of a product?</h4>
						<p>
							We work with different sources to determine sale
							prices systematically using a myriad of factors such
							as product condition, rarity, and size availability.
						</p>
						<br />
					</div>

					<div className="right-container">
						<h4>Are all products authentic?</h4>
						<p>
							All shoes and clothing are guaranteed to be 100%
							authentic. We do not sell, accept, or otherwise deal
							with fakes or factory variants. Buy with confidence
							as all shoes and clothing listed for sale are
							thoroughly inspected by our knowledgeable staff for
							authenticity and condition.
						</p>
						<br />

						<div>
							<h4>
								My size is not shown on the website but is there
								any way you can get my size as well?
							</h4>
							<p>Our full inventory is reflected on our page.</p>
							<br />
						</div>
						<div>
							<h4>When will my order arrive?</h4>
							<p>
								All orders will be dispatched from us within 1-3
								working days. Once an order ships, the customer
								will receive an e-mail notifying with the given
								tracking information. Find more information
								here.
							</p>
							<br />
						</div>
						<div>
							<h4>
								What is the return and exchange policy at
								Hype-gear?
							</h4>
							<p>
								If you live in Europe you will have the
								availability to return your order within 14 days
								of the delivery date. Unfortunately we do not
								accept exchanges, but your product can be
								returned for a refund and you may proceed to
								place a new order for the appropriate item.
							</p>
							<br />
							<h4>Does Hype-gear&copy; have a physical store?</h4>

							<p>
								No! IF we would setup a physical store, it would
								be located in the heart of Stockholm, Sweden.
							</p>
						</div>
					</div>
				</StyledFAQ>
			</>
		);
	}
}

export default FAQ;
