import React, { useState } from 'react'
import { Avatar, Button, TableCell, TableRow } from "@mui/material";
import BlockIcon from "@mui/icons-material/Block";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function CrmRow({ user, handleDeleteUser, handleToggleBusinessUser }) {
	const [isBusiness, setIsBusiness] = useState(user.isBusiness);
	
	const onToggleBusiness = async ()=>{
		let userData = await handleToggleBusinessUser(user._id);
		setIsBusiness(userData.isBusiness);
	}

	return (
		<TableRow>
			<TableCell>
				<Avatar
					alt={user.image.alt}
					src={user.image.url || "/avatar.png"}
				/>
			</TableCell>
			<TableCell>
				{user.name.first} {user.name.last}
			</TableCell>
			<TableCell sx={{ maxWidth: "300px", overflowWrap: "break-word" }}>
				{user.email}
			</TableCell>
			<TableCell>{user.phone}</TableCell>
			<TableCell align="center">
				{user.isAdmin ? <CheckCircleOutlineIcon /> : <BlockIcon />}
			</TableCell>
			<TableCell align="center">
				{isBusiness ? <CheckCircleOutlineIcon /> : <BlockIcon />}
			</TableCell>
			<TableCell align="right" sx={{ display: "flex", gap: "15px" }}>
				<Button
					color="error"
					variant="contained"
					onClick={() => handleDeleteUser(user._id)}
					disabled={user.isAdmin}
				>
					DELETE USER
				</Button>
				<Button
					color="warning"
					variant="contained"
					onClick={onToggleBusiness}
					disabled={user.isAdmin}
				>
					TOGGLE BUSINESS
				</Button>
			</TableCell>
		</TableRow>
	);
}
