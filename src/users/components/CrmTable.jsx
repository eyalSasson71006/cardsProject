import { TableBody } from "@mui/material";
import React from "react";
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
