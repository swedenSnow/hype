import React, { Component } from 'react';
import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

class Page extends Component {
	render() {
		return (
			<div>
				<Meta />
				<Header />
				{this.props.children}
				<Footer />
			</div>
		);
	}
}

export default Page;
