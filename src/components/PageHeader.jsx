import { Box, Divider, Typography, useTheme } from "@mui/material";
import React from "react";

export default function PageHeader({ title, subtitle }) {
	const theme = useTheme();
	return (
		<Box color={theme.headerText}>
			<Typography
				sx={{ textAlign: "center" }}
				variant="h2"
				component="h1"
			>
				{title}
			</Typography>
			<Typography
				sx={{ textAlign: "center" }}
				variant="h5"
				component="h2"
			>
				{subtitle}
			</Typography>
			<Divider sx={{ my: 2 }} />
		</Box>
	);
}
