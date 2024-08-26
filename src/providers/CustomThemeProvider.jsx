import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export default function CustomThemeProvider({ children }) {
	const [isDark, setIsDark] = useState(false);

	const theme = createTheme({
		palette: {
			mode: isDark ? "dark" : "light",
		},
		bgc: isDark ? "#4f4f4f" : "#e3f2fd",
		headerText: isDark ? "#fff" : "#6482AD",
	});

	return (
		<ThemeContext.Provider value={{ isDark, setIsDark }}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	);
}

export const useIsDark = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useIsDark must be used within provider");
	}
	return context;
};
