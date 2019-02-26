import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ErrorStyles = styled.div`
	background: ${props => props.theme.offWhite};
	padding: ${props => props.theme.medium};
	margin: ${props => props.theme.medium} 0;
	border: 1px solid rgba(0, 0, 0, 0.05);
	border-left: 2px solid ${props => props.theme.blue};
	border-top: 2px solid ${props => props.theme.blue};
	p {
		margin: 0;
	}
	strong {
		margin-right: ${props => props.theme.small};
		color: ${props => props.theme.blue};
	}
`;

const ErrorMsg = ({ error }) => (
	<ErrorStyles>
		<p>
			<strong>Something went wrong!</strong>
			{error.message.replace('GraphQL error: ', '')}
		</p>
	</ErrorStyles>
);

ErrorMsg.defaultProps = {
	error: {},
};

ErrorMsg.propTypes = {
	error: PropTypes.object,
};

export default ErrorMsg;
