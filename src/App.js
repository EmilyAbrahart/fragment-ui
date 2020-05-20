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
	SearchBar, 
	Input
} from './components';

import { GlobalStyle, darkTheme, defaultTheme } from './utils';

const App = () => {
	const [useDarkTheme, setUseDarkTheme] = useState(false);

	return (
		<ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
			<AppBar modifiers="fixed">
				<SearchBar placeholder='Search...'/>
			</AppBar>
			<SideDrawer modifiers='fixed'>
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
					<SideDrawerItem modifiers='coloredBullet'>First Item</SideDrawerItem>
					<SideDrawerItem modifiers='coloredBullet'>First Item</SideDrawerItem>
					<SideDrawerItem modifiers='coloredBullet'>First Item</SideDrawerItem>
					<SideDrawerItem modifiers='coloredBullet'>First Item</SideDrawerItem>
				</SideDrawerList>
				<PrimaryButton>Fragment UI</PrimaryButton>
				<SecondaryButton>Fragment UI</SecondaryButton>
				<TertiaryButton>Fragment UI</TertiaryButton>
			</SideDrawer>
			<Input/>
			<Input/>
			<Input/>
			<Input/>
			<Input/>
			<GlobalStyle />
		</ThemeProvider>
	);
};

export default App;
