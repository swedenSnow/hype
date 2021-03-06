import React, { Component } from 'react';
import Head from 'next/head';
import Account from '../components/Account';
import AccountEdit from '../components/AccountEdit';

class AccountPage extends Component {
	render() {
		let pageComponent;
		if (this.props.query.action === 'edit') {
			pageComponent = <AccountEdit />;
		} else {
			pageComponent = <Account />;
		}
		return (
			<div>
				<Head>
					<title>Hype-gear || My Account </title>
				</Head>
				<>{pageComponent}</>
			</div>
		);
	}
}

export default AccountPage;
