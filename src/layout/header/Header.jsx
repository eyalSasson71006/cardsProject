import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import LeftNavBar from "./left-navigation/LeftNavBar";
import RightNavbar from "./right-navigation/RightNavbar";
import MobileNavBar from "./left-navigation/MobileNavBar";

export default function Header() {
	return (
		<AppBar position="sticky" color="primary" elevation={10}>
			<Toolbar sx={{ justifyContent: "space-between" }}>
				<LeftNavBar
					sx={{ display: { md: "inline-flex", xs: "none" } }}
				/>
				<MobileNavBar
					sx={{ display: { md: "none", xs: "inline-flex" } }}
				/>
				<RightNavbar />
			</Toolbar>
		</AppBar>
	);
}
