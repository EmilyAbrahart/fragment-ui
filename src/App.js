import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
	PrimaryButton,
	SecondaryButton,
	TertiaryButton,
	SideDrawer,
	SideDrawerList,
	SideDrawerItem,
	AppBar,
} from './components';

import { GlobalStyle, darkTheme, defaultTheme } from './utils';

const App = () => {
	const [useDarkTheme, setUseDarkTheme] = useState(false);

	return (
		<div>
			<AppBar />
			<SideDrawer>
				<SideDrawerList>
					<SideDrawerItem modifiers="title">My Snippets</SideDrawerItem>
				</SideDrawerList>
				<PrimaryButton>New Snippet</PrimaryButton>
				<SideDrawerList>
					<SideDrawerItem>All Snippets</SideDrawerItem>
					<SideDrawerItem>Starred Snippets</SideDrawerItem>
				</SideDrawerList>
				<SideDrawerList>
					<SideDrawerItem modifiers="listHeader">First Item</SideDrawerItem>
					<SideDrawerItem>First Item</SideDrawerItem>
				</SideDrawerList>
				<PrimaryButton>Fragment UI</PrimaryButton>
				<SecondaryButton>Fragment UI</SecondaryButton>
				<TertiaryButton>Fragment UI</TertiaryButton>
			</SideDrawer>

			<GlobalStyle />
		</div>
	);
};

export default App;
