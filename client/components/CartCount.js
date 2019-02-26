import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Dot = styled.div`
	display: inline;
	/* background: ${props => props.theme.blue}; */
	color: ${props => props.theme.black};
	padding: 0.5rem;
	line-height: 2rem;
	min-width: 2rem;
	border-radius: 50%;
	/* Keep the same width regardless if 1 || 2 */
	font-feature-settings: 'tnum';
	font-variant-numeric: tabular-nums;
`;

const CartCount = ({ count }) => <Dot>{count}</Dot>;

export default CartCount;
