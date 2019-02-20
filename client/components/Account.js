import React, { Component } from 'react';
import Link from 'next/link';
import PleaseSignIn from './PleaseSignIn';

class Account extends Component {
	render() {
		console.log(this.props);
		return (
			<PleaseSignIn message="Please sign in to view your account.">
				<div>
					E-mail: ???
					<hr />
					<Link href="/orders">
						<a>My Orders</a>
					</Link>
					Update Details
					<br />
					Change Password
					<br />
				</div>
			</PleaseSignIn>
		);
	}
}

export default Account;
