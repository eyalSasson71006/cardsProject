import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useCurrentUser } from "../providers/UserProvider";
import useForm from "../../forms/hooks/useForm";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import signupSchema from "../models/signupSchema";
import { Container } from "@mui/material";
import SignupForm from "../components/SignupForm";
import useUsers from "../hooks/useUsers";
import { useSearchContext } from "../../providers/SearchProvider";

export default function SignupPage() {
	const { handleSignup } = useUsers();
	const {
		data,
		errors,
		handleChange,
		handleReset,
		validateForm,
		onSubmit,
		handleChangeCheckBox,
	} = useForm(initialSignupForm, signupSchema, handleSignup);

	const { setSearchVisibility } = useSearchContext();
	useEffect(() => {
		setSearchVisibility(false);
	}, []);

	const { user } = useCurrentUser();

	if (user) return <Navigate to={ROUTES.ROOT} replace />;

	return (
		<Container
			sx={{
				paddingTop: 8,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<SignupForm
				onSubmit={onSubmit}
				onReset={handleReset}
				validateForm={validateForm}
				title={"Signup form"}
				errors={errors}
				data={data}
				onInputChange={handleChange}
				handleChangeCheckBox={handleChangeCheckBox}
			/>
		</Container>
	);
}
