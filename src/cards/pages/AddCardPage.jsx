import { Container } from "@mui/material";
import React from "react";
import { useCurrentUser } from "../../users/providers/UserProvider";
import { Navigate, useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import CardForm from "../components/CardForm";
import useForm from "../../forms/hooks/useForm";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import cardSchema from "../models/cardSchema";
import useCards from "../hooks/useCards";
import { useSearchContext } from "../../providers/SearchProvider";

export default function AddCardPage() {
	const { user } = useCurrentUser();
	const { handleCreateCard } = useCards();
	const { data, errors, handleChange, handleReset, validateForm, onSubmit } =
		useForm(initialCardForm, cardSchema, handleCreateCard);
	const { setSearchVisibility } = useSearchContext();

	setSearchVisibility(false);

	if (!user || !user.isBusiness) return <Navigate to={ROUTES.ROOT} replace />;

	return (
		<Container
			sx={{
				paddingTop: 8,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<CardForm
				onSubmit={onSubmit}
				onReset={handleReset}
				validateForm={validateForm}
				title="Add Card"
				errors={errors}
				data={data}
				onInputChange={handleChange}
			/>
		</Container>
	);
}
