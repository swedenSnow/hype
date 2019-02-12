import React, { Component } from 'react';
import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.nightMode ? 'black' : 'white')};
    color: ${props => (props.nightMode ? 'white' : 'black')};
  }
  a
  {
	color: ${props => (props.nightMode ? 'white' : 'black')};
  }
`;

class Page extends Component {
	render() {
		return (
			<div>
				<Meta />
				<Header />
				<GlobalStyle />
				{this.props.children}
				<Footer />
			</div>
		);
	}
}

export default Page;
