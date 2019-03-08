import Head from 'next/head';
import FeaturedItems from '../components/FeaturedItems';
import styled from 'styled-components';
import Link from 'next/link';

const StyledGrid = styled.div`
	display: grid;
	height: calc(100vh - 5rem);

	grid-template-columns: 50% 50%;
	grid-template-areas: 'main top' 'main bottom';
	grid-gap: 1px;

	.item {
		display: flex;
		align-items: flex-end;
		position: relative;
		overflow: hidden;
	}

	.shop {
		grid-area: main;
		figure {
			background-image: url('https://res.cloudinary.com/swedensnow/image/upload/v1552054452/offwhite_jacket_jh9x51.jpg');
		}
	}

	.about {
		grid-area: top;
		figure {
			background-image: url('https://res.cloudinary.com/swedensnow/image/upload/v1552050968/air-jordan-1-union-red-1_kwcgvi.jpg');
		}
	}

	.faq {
		grid-area: bottom;
		figure {
			background-image: url('https://res.cloudinary.com/swedensnow/image/upload/v1552050969/nike-air-vapormax-off-white-ten-AA3831-001-1_evc6zc.jpg');
		}
	}

	figure {
		margin: 0;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		filter: grayscale(0);
		transition: transform 1s ease, filter 1s ease;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;

		&:hover {
			transform: scale(1.05);
		}
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: -moz-linear-gradient(
			top,
			hsla(0, 0%, 0%, 0) 0%,
			hsla(0, 0%, 0%, 0) 50%,
			hsla(0, 0%, 0%, 0.32) 82%,
			hsla(0, 0%, 0%, 0.27) 100%
		); /* FF3.6-15 */
		background: -webkit-linear-gradient(
			top,
			hsla(0, 0%, 0%, 0) 0%,
			hsla(0, 0%, 0%, 0) 50%,
			hsla(0, 0%, 0%, 0.32) 82%,
			hsla(0, 0%, 0%, 0.27) 100%
		); /* Chrome10-25,Safari5.1-6 */
		background: linear-gradient(
			to bottom,
			hsla(0, 0%, 0%, 0) 0%,
			hsla(0, 0%, 0%, 0) 50%,
			hsla(0, 0%, 0%, 0.32) 82%,
			hsla(0, 0%, 0%, 0.27) 100%
		);
		/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a3000000',GradientType=0 );
	}

	.inner {
		color: white;
		position: relative;
		margin: 4vw;
		z-index: 2;

		.content {
			position: relative;
			transition: transform 0.35s ease;
		}
		.link-content {
			margin-bottom: 0.75rem;
		}
	}
`;

const HomePage = props => (
	<div>
		<Head>
			<title>Hype-gear || Home</title>
		</Head>
		<div className="hero">
			<hr />

			<StyledGrid>
				<div className="item shop">
					<Link href="/shop">
						<a>
							<figure>
								<div className="overlay" />
							</figure>
							<div className="inner">
								<div className="content">
									<div className="link-content">Shop</div>
									<h2>Shop Now</h2>
								</div>
							</div>
						</a>
					</Link>
				</div>
				<div className="item about">
					<Link href="/aboutus">
						<a>
							<figure>
								<div className="overlay" />
							</figure>
							<div className="inner">
								<div className="content">
									<div className="link-content">About Us</div>
									<h2>Read More</h2>
								</div>
							</div>
						</a>
					</Link>
				</div>
				<div className="item faq">
					<Link href="/faq">
						<a>
							<figure>
								<div className="overlay" />
							</figure>
							<div className="inner">
								<div className="content">
									<div className="link-content">FAQ</div>
									<h2>Any Questions ?</h2>
								</div>
							</div>
						</a>
					</Link>
				</div>
			</StyledGrid>
			<h3>Featured items</h3>
			<p>Maybe one day?</p>
			<FeaturedItems />
		</div>
	</div>
);

export default HomePage;
