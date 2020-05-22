export const ICON_MODIFIERS = {
	light: (props) => `
	stroke: ${props.theme.colour.iconColourOnDark};
	fill: ${props.theme.colour.iconColourOnDark};
	`,
	small: () => `
	width: 1rem;
	height: 1rem;
	`,
	large: () => `
	width: 3rem;
	height: 3rem;
	`,
};
