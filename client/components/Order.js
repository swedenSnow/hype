import React from 'react';

const Order = props => {
	return (
		<div>
			<div>
				<div>
					<p>Item #1</p>
					<p>x2</p>
					<p>$9.99</p>
				</div>
				<div>
					<p>Item #2</p>
					<p>x1</p>
					<p>$9.99</p>
				</div>
			</div>
			<p>
				<strong>Order Total:</strong> $29.97
			</p>
		</div>
	);
};

export default Order;
