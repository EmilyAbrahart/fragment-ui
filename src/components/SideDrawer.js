import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { defaultTheme, typeScale } from '../utils';

// Modifiers

const LIST_ITEM_MODIFIERS = {
	listHeader: () => `
	padding: 12px 0;
	color: ${defaultTheme.textColourOnDark};
	`,
	title: () => `
	font-size: ${typeScale.header4};
	color: ${defaultTheme.textTitleColourOnDark}
	align-self: center;
	text-align: center;
	`,
};

// Main Side Drawer

export const SideDrawer = styled.div`
	height: 100%;
	width: 350px;
	background-color: ${defaultTheme.primaryColour};
	position: absolute;
	left: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	padding: 32px 16px;
`;

// Side Drawer Section List

export const SideDrawerList = styled.ul`
	width: 100%;
	background: none;
	border: none;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	list-style-type: none;
`;

// Side Drawer Items

export const SideDrawerItem = styled.li`
	font-size: ${typeScale.paragraph};
	color: ${defaultTheme.textColourOnDark};
	padding: 8px 0;
	text-align: left;
	width: 80%;

	${applyStyleModifiers(LIST_ITEM_MODIFIERS)}
`;

