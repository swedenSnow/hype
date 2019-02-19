import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ error }) => {
	console.log(error);
	return (
		<div>
			<p>
				<strong>Error: </strong>
				Style this component and make it work.
			</p>
		</div>
	);
};

DisplayError.propTypes = {
	error: PropTypes.object,
};

export default ErrorMessage;
