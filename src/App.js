import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import DefaultLayout from './layout/DefaultLayout';

import { GlobalStyle, darkTheme, defaultTheme } from './utils';

const App = () => {
	const [useDarkTheme, setUseDarkTheme] = useState(false);

	return (
		<ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
			<DefaultLayout />
			<GlobalStyle />
		</ThemeProvider>
	);
};

export default App;
