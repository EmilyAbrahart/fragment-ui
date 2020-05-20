import styled from 'styled-components';
import { defaultTheme, typeScale } from '../utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

const APP_BAR_MODIFIERS = {
	fixed: () => `
    position: fixed;
  `,
};

export const AppBar = styled.div`
	width: 100%;
	height: 80px;
	background-color: ${defaultTheme.primaryColour};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: ${typeScale.paragraph};
`;
