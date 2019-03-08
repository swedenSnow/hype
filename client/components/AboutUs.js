import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';

const StyledAbout = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-flow: column wrap;
`;
class AboutUs extends Component {
	render() {
		return (
			<StyledAbout>
				<h1>About Us</h1>

				<div>
					<h4>What Makes Hype-gear&copy; diffrent ?</h4>
					<p>
						At Hype-gear we offer only the best and most limited
						streetwear and sneakers in the world. The range of
						exclusivity and diversity amongst our product is
						something we strive for. In our store and on our website
						you can find sneakers and clothing that you will not
						find at any other regular streetwear store.
					</p>
					<br />
				</div>

				<div>
					<h4>What determines the condition of your items?</h4>
					<p>
						At Hype-gear we grade the condition of items in a scale:
					</p>
					<br />
					<p>Dead Stock (Brand new)</p>
					<br />
					<p>Execellent</p>
					<br />
					<p>Very Good</p>
					<br />
					<p>Fair</p>
					<br />
					<p>Poor</p>
					<br />
				</div>

				<div>
					<h4>What determines the price of a product?</h4>
					<p>
						We work with different sources to determine sale prices
						systematically using a myriad of factors such as product
						condition, rarity, and size availability.
					</p>
					<br />
				</div>
				<div>
					<h4>Are all products authentic?</h4>
					<p>
						All shoes and clothing are guaranteed to be 100%
						authentic. We do not sell, accept, or otherwise deal
						with fakes or factory variants. Buy with confidence as
						all shoes and clothing listed for sale are thoroughly
						inspected by our knowledgeable staff for authenticity
						and condition.
					</p>
					<br />
				</div>
				<div>
					<h4>
						My size is not shown on the website but is there any way
						you can get my size as well?
					</h4>
					<p>Our full inventory is reflected on our page.</p>
					<br />
				</div>
				<div>
					<h4>When will my order arrive?</h4>
					<p>
						All orders will be dispatched from us within 1-3 working
						days. Once an order ships, the customer will receive an
						e-mail notifying with the given tracking information.
						Find more information here.
					</p>
					<br />
				</div>
				<div>
					<h4>
						What is the return and exchange policy at Hype-gear?
					</h4>
					<p>
						If you live in Europe you will have the availability to
						return your order within 14 days of the delivery date.
						Unfortunately we do not accept exchanges, but your
						product can be returned for a refund and you may proceed
						to place a new order for the appropriate item.
					</p>
					<br />
				</div>
			</StyledAbout>
		);
	}
}

export default AboutUs;
