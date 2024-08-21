import React from "react";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import { Typography } from "@mui/material";
import Cards from "./Cards";

export default function CardsFeedback({
	isLoading,
	cards,
	error
}) {
	if (isLoading) return <Spinner />;
	if (error) return <Error errorMessage={error} />;
	if (cards && cards.length === 0)
		return (
			<Typography m={10} mx="auto" variant="h5" sx={{textAlign:"center", maxWidth:"450px"}}>
				Oops... it seems there are no business cards to display
			</Typography>
		);
	if (cards)
		return (
			<Cards
				cards={cards}
			/>
		);

	return null;
}
