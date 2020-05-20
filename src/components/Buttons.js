import styled from 'styled-components';
import { defaultTheme, typeScale } from '../utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

const BUTTON_MODIFIERS = {
	small: () => `
  font-size: ${typeScale.helperText};
  padding: 8px;
  `,
	large: () => `
  font-size: ${typeScale.header5};
  padding: 16px 24px;
	`,
	success: () => `
	background: linear-gradient(
		${defaultTheme.status.successColour},
		${defaultTheme.status.successColourGradient}
	);
	color: ${defaultTheme.textColourInverted};
	border: none;
	&:focus {
		outline: 2px solid ${defaultTheme.status.successColour};
		outline-offset: 2px;
	}
	&:active {
		background: linear-gradient(
		${defaultTheme.status.successColour},
		${defaultTheme.status.successColourGradient}
		);
	}
	`,
	warning: () => `
	background: linear-gradient(
		${defaultTheme.status.warningColour},
		${defaultTheme.status.warningColourGradient}
	);
	color: ${defaultTheme.textColourInverted};
	border: none;
	&:focus {
		outline: 2px solid ${defaultTheme.status.warningColour};
		outline-offset: 2px;
	}
	&:active {
		background: linear-gradient(
		${defaultTheme.status.warningColour},
		${defaultTheme.status.warningColourGradient}
		);
	}
	`,
	error: () => `
	background: linear-gradient(
		${defaultTheme.status.errorColour},
		${defaultTheme.status.errorColourGradient}
	);
	color: ${defaultTheme.textColourInverted};
	border: none;
	&:focus {
		outline: 2px solid ${defaultTheme.status.errorColour};
		outline-offset: 2px;
	}
	&:active {
		background: linear-gradient(
		${defaultTheme.status.errorColour},
		${defaultTheme.status.errorColourGradient}
		);
	}
	`,
	successGhostButton: () => `
	background: none;
	color: ${defaultTheme.status.successColour};
	border: 2px solid ${defaultTheme.status.successColour};
	
	&:hover, &:active {
		background-color: ${defaultTheme.status.successColour};
		color: ${defaultTheme.textColourInverted};
	}

	&:focus {
		outline: 2px solid ${defaultTheme.status.successColour};
		outline-offset: 2px;
	}
	`,
	warningGhostButton: () => `
	background: none;
	color: ${defaultTheme.status.warningColour};
	border: 2px solid ${defaultTheme.status.warningColour};
	
	&:hover, &:active {
		background-color: ${defaultTheme.status.warningColour};
		color: ${defaultTheme.textColourInverted};
	}
	&:focus {
		outline: 2px solid ${defaultTheme.status.warningColour};
		outline-offset: 2px;
	}
	`,
	errorGhostButton: () => `
	background: none;
	color: ${defaultTheme.status.errorColour};
	border: 2px solid ${defaultTheme.status.errorColour};
	
	&:hover, &:active {
		background-color: ${defaultTheme.status.errorColour};
		color: ${defaultTheme.textColourInverted};
	}
	&:focus {
		outline: 2px solid ${defaultTheme.status.errorColour};
		outline-offset: 2px;
	}
	`,
};

const Button = styled.button`
	padding: 12px 24px;
	font-size: ${typeScale.paragraph};
	border-radius: 3px;
	min-width: 100px;
	cursor: pointer;
	font-family: ${defaultTheme.primaryFont};
	border: none;
	outline: none;

	&:hover {
		box-shadow: none;
	}

	&:disabled {
		background: ${defaultTheme.disabledColour};
		cursor: not-allowed;
		box-shadow: none;
	}
`;

export const PrimaryButton = styled(Button)`
	background: linear-gradient(
		${defaultTheme.secondaryColour},
		${defaultTheme.secondaryColourGradient}
	);
	color: white;
	box-shadow: ${defaultTheme.ButtonDropShadow};

	&:focus {
		outline: 2px solid ${defaultTheme.secondaryColour};
		outline-offset: 2px;
	}

	&:active {
		background: ${defaultTheme.secondaryColourActive};
		box-shadow: ${defaultTheme.ButtonInnerShadow};
	}

	${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
	background: linear-gradient(
		${defaultTheme.tertiaryColour},
		${defaultTheme.tertiaryColourGradient}
	);
	color: white;
	box-shadow: ${defaultTheme.ButtonDropShadow};

	&:focus {
		outline: 2px solid ${defaultTheme.tertiaryColour};
		outline-offset: 2px;
	}

	&:active {
		background: ${defaultTheme.tertiaryColourActive};
		box-shadow: ${defaultTheme.ButtonInnerShadow};
	}

	${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
	background: none;
	color: ${defaultTheme.secondaryColour};
	border: 2px solid ${defaultTheme.secondaryColour};
	box-shadow: ${defaultTheme.ButtonDropShadow};

	&:focus {
		outline: 2px solid ${defaultTheme.secondaryColour};
		outline-offset: 2px;
	}

	&:active {
		background: ${defaultTheme.secondaryColour};
		box-shadow: ${defaultTheme.ButtonInnerShadow};
		color: ${defaultTheme.textColourInverted};
	}

	&:disabled {
		color: ${defaultTheme.disabledColour};
		border: 2px solid ${defaultTheme.disabledColour};
		background: none;
	}

	${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
