import React from "react";
import {
	BottomNavigation,
	BottomNavigationAction,
	Divider,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PortraitIcon from "@mui/icons-material/Portrait";
import ROUTES from "../../routes/routesModel";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../../users/providers/UserProvider";

export default function Footer() {
	const navigate = useNavigate();
	const { user } = useCurrentUser();
	return (
		<div style={{ position: "sticky", bottom: "0", zIndex: "999" }}>
			<Divider />
			<BottomNavigation showLabels>
				<BottomNavigationAction
					onClick={() => navigate(ROUTES.ABOUT)}
					label="About"
					icon={<InfoIcon />}
				/>
				{user && (
					<BottomNavigationAction
						onClick={() => navigate(ROUTES.FAV_CARDS)}
						label="Favorites"
						icon={<FavoriteIcon />}
					/>
				)}
				{user && user.isBusiness && (
					<BottomNavigationAction
						onClick={() => navigate(ROUTES.MY_CARDS)}
						label="My Cards"
						icon={<PortraitIcon />}
					/>
				)}
			</BottomNavigation>
		</div>
	);
}
