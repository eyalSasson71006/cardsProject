import { Paper, Table, TableCell, TableContainer, TableHead } from "@mui/material";
import React from "react";
import CrmTable from "../components/CrmTable";

export default function AdminCRMPage() {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="Admin CRM Table">
				<TableHead>
          <TableCell>Image</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>ID</TableCell>
          <TableCell>Is Admin</TableCell>
          <TableCell>Is Business</TableCell>
        </TableHead>
        <CrmTable/>
			</Table>
		</TableContainer>
	);
}
