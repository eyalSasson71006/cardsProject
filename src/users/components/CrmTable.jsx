import { Avatar, TableBody, TableCell, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import useUsers from "../hooks/useUsers";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";

export default function CrmTable({ usersData }) {
	const { isLoading, error, handleGetAllUsers } = useUsers();
	const [allUsers, setAllUsers] = useState();

	useEffect(() => {
		const getData = async () => {
			setAllUsers(await handleGetAllUsers());
		};
		getData();
	}, []);

	console.log(allUsers);

	if (isLoading) return <Spinner />;
	if (error) return <Error errorMessage={error} />;
	return (
		<TableBody>
			{allUsers.map((user) => (
				<TableRow key={user._id}>
					<TableCell>
						<Avatar
							alt={user.image.alt}
							src={user.image.url || "/avatar.png"}
						/>
					</TableCell>
					<TableCell>
						{user.name.first} {user.name.last}
					</TableCell>
					<TableCell>{user.email}</TableCell>
					<TableCell>{user.phone}</TableCell>
					<TableCell>{user._id}</TableCell>
					<TableCell>{user.isAdmin ? "true" : "false"}</TableCell>
					<TableCell>{user.isBusiness ? "true" : "false"}</TableCell>
				</TableRow>
			))}
		</TableBody>
	);
}
