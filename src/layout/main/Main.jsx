import { Box, useTheme } from "@mui/material";
import React from "react";

export default function Main({ children }) {
	const theme = useTheme();

	return (
		<Box
			sx={{
				minHeight: "85vh",
				padding: "8px",
			}}
			backgroundColor={theme.bgc}
		>
			{children}
		</Box>
	);
}
