import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { ICON_MODIFIERS } from './iconModifiers';

export const IconWrapper = styled.svg`
	width: 2rem;
	height: 2rem;
	stroke: ${(props) => props.theme.colour.iconColour};
	stroke-width: 3;
	fill: ${(props) => props.theme.colour.iconColour};
	${applyStyleModifiers(ICON_MODIFIERS)}
`;
