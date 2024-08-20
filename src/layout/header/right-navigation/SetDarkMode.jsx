import React from "react";
import { Box, IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useIsDark } from "../../../providers/CustomThemeProvider";

export default function SetDarkMode() {
	const { isDark, setIsDark } = useIsDark();
	return (
		<Box>
			<IconButton onClick={() => setIsDark((prev) => !prev)}>
				{isDark ? <DarkModeIcon /> : <LightModeIcon />}
			</IconButton>
		</Box>
	);
}
