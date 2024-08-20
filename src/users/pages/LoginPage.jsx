import React from "react";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useCurrentUser } from "../providers/UserProvider";
import LoginForm from "../components/LoginForm";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import loginSchema from "../models/loginSchema";
import useForm from "../../forms/hooks/useForm";
import { Container } from "@mui/material";
import useUsers from "../hooks/useUsers";



export default function LoginPage() {
	const { user } = useCurrentUser();
	const { handleLogin } = useUsers();
	const { data, errors, handleChange, handleReset, validateForm, onSubmit } =
		useForm(initialLoginForm, loginSchema, handleLogin);

	if (user) return <Navigate to={ROUTES.ROOT} replace />;

	return (
		<>
			<Container
				sx={{
					paddingTop: 8,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<LoginForm
					onSubmit={onSubmit}
					onReset={handleReset}
					validateForm={validateForm}
					title="Login Form"
					errors={errors}
					data={data}
					onInputChange={handleChange}
				/>
			</Container>
		</>
	);
}

//AccountBoxIcon
