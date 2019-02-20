import React, { Component } from 'react';
import Link from 'next/link';

class Account extends Component {
	render() {
		return (
			<div>
				E-mail: ???
				<hr />
				<Link href="/orders">
					<a>My Orders</a>
				</Link>
				<hr />
				Update Details
				<br />
				Change Password
				<br />
			</div>
		);
	}
}

export default Account;
