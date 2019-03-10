import React, { Component } from 'react';
import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
	small: '1rem',
	root: '1.5rem',
	medium: '2rem',
	big: '2.8rem',
	XL: '4rem',
	// blue: '#193773',
	blue: '#181717',
	lightBlue: '#4080ff',
	red: '#FF0000',
	white: '#FFF',
	offWhite: '#EDEDED',
	lightgrey: '#f5f5f5',
	black: '#181717',
	maxWidthInner: '1100px',
	boxShadow: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
	margin-top: ${props => props.theme.medium};
	background: ${props => props.theme.lightgrey};
	transition: all 0.4s ease;
	-webkit-transition: all 0.4s ease;
`;

const Inner = styled.div`
	/* max-width: ${props => props.theme.maxWidthInner}; */
	margin: 0 auto;
	/* padding: 2rem; */
	box-shadow: ${props => props.theme.boxShadow};
`;

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Raleway|Ubuntu:400,700');
	html {
			box-sizing: border-box;
			font-size: 10px;

		}
		*, *:before, *:after {
			box-sizing: inherit;
		}
		h1,h2,h3,h4,h5, p{
			margin: 0;
		}


	body {
    background-color: ${props => (props.nightMode ? 'black' : 'white')};
    color: ${props => (props.nightMode ? 'white' : 'black')};
	font-family: 'open', sans-serif;
	font-size: 1.5rem;
	line-height: 1.7;
	/* font-family: 'Raleway', sans-serif; */
  }
  a
  {
	text-decoration: none;
	color: ${props => (props.nightMode ? 'white' : 'black')};
  }
`;

class Page extends Component {
	render() {
		return (
			<div>
				<ThemeProvider theme={theme}>
					<>
						<StyledPage>
							<Meta />
							<Header />
							<GlobalStyle />
							<Inner>{this.props.children}</Inner>
							{/* <Footer /> */}
						</StyledPage>
					</>
				</ThemeProvider>
			</div>
		);
	}
}

export default Page;
