import React from "react";

import SetDarkMode from "./SetDarkMode";
import { Box } from "@mui/material";
import { useCurrentUser } from "../../../users/providers/UserProvider";
import Logged from "./Logged";
import NotLogged from "./NotLogged";
import SearchBar from "./SearchBar";

export default function RightNavbar() {
	const { user } = useCurrentUser();

	return (
		<Box sx={{ display: "flex", alignItems: "center" }}>
			<SearchBar />
			<SetDarkMode />
			{user ? <Logged /> : <NotLogged />}
		</Box>
	);
}
