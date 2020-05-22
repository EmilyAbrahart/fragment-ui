import React from 'react';
import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { ICON_MODIFIERS } from './config';

const StarIconWrapper = styled.svg`
	width: 2rem;
	height: 2rem;
	stroke: ${(props) => props.theme.colour.iconColour};
	stroke-width: 3;
	fill: ${(props) => props.theme.colour.iconColour};
	fill-opacity: ${(props) => (props.filled ? 1 : 0)};
	${applyStyleModifiers(ICON_MODIFIERS)}
`;

export const StarIcon = ({ filled, modifiers }) => (
	<StarIconWrapper filled={filled} modifiers={modifiers} viewBox="0 0 50 50">
		<path d="M23.9266 2.00861L27.7496 13.7746C28.0843 14.8046 29.0442 15.502 30.1272 15.502H42.4987C43.9518 15.502 44.5559 17.3615 43.3804 18.2156L33.3716 25.4873C32.4954 26.1239 32.1288 27.2524 32.4635 28.2824L36.2865 40.0484C36.7355 41.4303 35.1538 42.5795 33.9782 41.7254L23.9695 34.4537C23.0932 33.8171 21.9068 33.8171 21.0305 34.4537L11.0218 41.7254C9.84624 42.5795 8.26452 41.4303 8.71355 40.0484L12.5365 28.2824C12.8712 27.2524 12.5046 26.1239 11.6284 25.4873L1.61964 18.2156C0.444065 17.3615 1.04823 15.502 2.50131 15.502H14.8728C15.9558 15.502 16.9157 14.8046 17.2504 13.7746L21.0734 2.00861C21.5224 0.626645 23.4776 0.626645 23.9266 2.00861Z" />
	</StarIconWrapper>
);
