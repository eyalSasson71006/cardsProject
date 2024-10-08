import React, { useEffect } from "react";
import PageHeader from "../components/PageHeader";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/routesModel";
import { useSearchContext } from "../providers/SearchProvider";

export default function ErrorPage() {
	const navigate = useNavigate();
	const { setSearchVisibility } = useSearchContext();
	useEffect(() => {
		setSearchVisibility(false);
	}, []);
	return (
		<>
			<PageHeader title="Error 404" subtitle="This page is not found" />
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<img
					style={{ width: "300px" }}
					src="../../public/img404.png"
					alt="404"
				/>
				<Typography m={2} variant="h5" component="h3">
					Oops... The requested URL was not found on this server
				</Typography>
				<Button
					variant="contained"
					onClick={() => navigate(ROUTES.ROOT)}
				>
					Click here to return to Home page...
				</Button>
			</Box>
		</>
	);
}
