import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useCurrentUser } from "../providers/UserProvider";
import useForm from "../../forms/hooks/useForm";
import { Container } from "@mui/material";
import useUsers from "../hooks/useUsers";
import mapUserToModel from "../helpers/normalization/mapUserToModel";
import initialEditForm from "../helpers/initialForms/initialEditForm";
import editSchema from "../models/editSchema";
import EditForm from "../components/EditForm";
import { useSearchContext } from "../../providers/SearchProvider";

export default function EditUserPage() {
	const { handleUserEdit, getUserById } = useUsers();
	const { id } = useParams();
	const { user } = useCurrentUser();

	const { setSearchVisibility } = useSearchContext();
	useEffect(() => {
		setSearchVisibility(false);
	}, []);

	const {
		data,
		errors,
		setData,
		handleChange,
		handleReset,
		validateForm,
		onSubmit,
	} = useForm(initialEditForm, editSchema, () => {
		handleUserEdit(id, data);
	});

	useEffect(() => {
		const getData = async () => {
			setData(await getUserById(id));
			setData((prev) => mapUserToModel(prev));
		};
		getData();
	}, [id]);

	if (!user) return <Navigate to={ROUTES.ROOT} replace />;

	return (
		<Container
			sx={{
				paddingTop: 8,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<EditForm
				onSubmit={onSubmit}
				onReset={handleReset}
				validateForm={validateForm}
				title={"Edit User"}
				errors={errors}
				data={data}
				onInputChange={handleChange}
			/>
		</Container>
	);
}
