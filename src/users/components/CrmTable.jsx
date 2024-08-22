import { Avatar, Button, TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";
import BlockIcon from "@mui/icons-material/Block";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CrmRow from "./CrmRow";

export default function CrmTable({
	allUsers,
	handleDeleteUser,
	handleToggleBusinessUser,
}) {
	return (
		<TableBody>
			{allUsers.map((user) => (
				<CrmRow
					key={user._id}
					user={user}
					handleDeleteUser={handleDeleteUser}
					handleToggleBusinessUser={handleToggleBusinessUser}
				/>
			))}
		</TableBody>
	);
}
