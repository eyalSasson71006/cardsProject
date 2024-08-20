import React from "react";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

export default function LoginForm({
	onSubmit,
	onReset,
	validateForm,
	title,
	errors,
	data,
	onInputChange,
}) {
	return (
		<Form
			onSubmit={onSubmit}
			onReset={onReset}
			validateForm={validateForm}
			title={title}
			styles={{ maxWidth: "800px" }}
		>
			<Input
				name="email"
				label="Email"
				type="email"
				error={errors.email}
				onChange={onInputChange}
				data={data}
				// sm={6}
				required={true}
			/>
			<Input
				name="password"
				label="Password"
				type="password"
				error={errors.password}
				onChange={onInputChange}
				data={data}
				required={true}
			/>
			<Grid item xs={12}>
				<Button
					variant="outlined"
					component={Link}
					to={ROUTES.SIGNUP}
					startIcon={<AccountBoxIcon />}
					sx={{ width: "100%" }}
				>
					Sign Up
				</Button>
			</Grid>
		</Form>
	);
}
