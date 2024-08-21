import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import useUsers from "../../../users/hooks/useUsers";
import { Menu, MenuItem } from "@mui/material";
import { useCurrentUser } from "../../../users/providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

export default function Logged() {
	const { handleLogout } = useUsers();
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const { user } = useCurrentUser();
	const navigate = useNavigate();

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<Tooltip title="My Account">
				<IconButton
					onClick={handleClick}
					sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}
				>
					<Avatar alt="avatar" src="/avatar.png" />
				</IconButton>
			</Tooltip>
			<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
				<MenuItem
					onClick={() => {
						navigate(ROUTES.USER_PROFILE);
						handleClose();
					}}
				>
					My account
				</MenuItem>
				<MenuItem
					onClick={() => {
						navigate(ROUTES.EDIT_USER);
						handleClose();
					}}
				>
					Edit account
				</MenuItem>
				<MenuItem onClick={handleLogout}>Logout</MenuItem>
			</Menu>
		</>
	);
}
