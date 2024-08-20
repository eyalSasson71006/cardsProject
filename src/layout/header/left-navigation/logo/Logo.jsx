import { Typography } from "@mui/material";
import React from "react";
import NavBarLink from "../../../../routes/components/NavBarLink";
import ROUTES from "../../../../routes/routesModel";

export default function Logo() {
	return (
		<div>
			<NavBarLink to={ROUTES.ROOT}>
				<Typography
					variant="h4"
					sx={{
						fontFamily: "fantasy, arial, sans-serif",
						display: { md: "inline-flex", xs: "none" },
					}}
					color="text.primary"
				>
					BCard
				</Typography>
			</NavBarLink>
		</div>
	);
}
