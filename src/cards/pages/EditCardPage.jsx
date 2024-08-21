import React, { useEffect } from "react";
import useCards from "../hooks/useCards";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { Container } from "@mui/material";
import CardForm from "../components/CardForm";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import cardSchema from "../models/cardSchema";
import useForm from "../../forms/hooks/useForm";
import mapCardToModel from "../helpers/normalization/mapCardToModel";

export default function EditCardPage() {
	const { card, handleEdit, getCardsById, isLoading, error } = useCards();
	const { id } = useParams();
	const {
		data,
		setData,
		errors,
		handleChange,
		handleReset,
		validateForm,
		onSubmit,
	} = useForm(initialCardForm, cardSchema, ()=>{
        handleEdit(id, data)
    });

	useEffect(() => {
		const getData = async () => {
			setData(await getCardsById(id));
			setData((prev) => mapCardToModel(prev));
		};
		getData();
	}, [id]);

	if (isLoading) return <Spinner />;
	if (error) return <Error errorMessage={error} />;

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
				title="Edit Card"
				errors={errors}
				data={data}
				onInputChange={handleChange}
			/>
		</Container>
	);
}
