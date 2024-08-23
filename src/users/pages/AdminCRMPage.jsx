import {
	Paper,
	Table,
	TableCell,
	TableContainer,
	TableHead,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CrmTable from "../components/CrmTable";
import useUsers from "../hooks/useUsers";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useCurrentUser } from "../providers/UserProvider";
import PageHeader from "../../components/PageHeader";
import { useSearchContext } from "../../providers/SearchProvider";

export default function AdminCRMPage() {
	const {
		isLoading,
		error,
		handleGetAllUsers,
		handleDeleteUser,
		handleToggleBusinessUser,
	} = useUsers();
	const [allUsers, setAllUsers] = useState();
	const { user } = useCurrentUser();
	const { searchInput, setSearchVisibility } = useSearchContext();
	setSearchVisibility(true);

	useEffect(() => {
		const getData = async () => {
			setAllUsers(await handleGetAllUsers());
		};
		getData();
	}, []);

	if (!user || !user.isAdmin) return <Navigate to={ROUTES.ROOT} replace />;
	if (isLoading) return <Spinner />;
	if (error) return <Error errorMessage={error} />;
	return (
		<>
			<PageHeader
				title={"Admin CRM"}
				subtitle={"customer relationship management"}
			/>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="Admin CRM Table">
					<TableHead>
						<TableCell>Image</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Email</TableCell>
						<TableCell>Phone</TableCell>
						<TableCell>ID</TableCell>
						<TableCell>Admin?</TableCell>
						<TableCell>Business?</TableCell>
						<TableCell></TableCell>
					</TableHead>
					<CrmTable
						allUsers={allUsers.filter((user) =>
							user.name.first.includes(searchInput)
						)}
						handleDeleteUser={handleDeleteUser}
						handleToggleBusinessUser={handleToggleBusinessUser}
					/>
				</Table>
			</TableContainer>
		</>
	);
}
