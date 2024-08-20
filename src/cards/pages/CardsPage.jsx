import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";
import AddNewCardButton from "../components/AddNewCardButton";
import { useCurrentUser } from "../../users/providers/UserProvider";

export default function CardsPage() {
	const { user } = useCurrentUser();
	const { cards, error, isLoading, getAllCards} =
		useCards();

	useEffect(() => {
		getAllCards();		
	}, []);

	return (
		<>
			<PageHeader
				title="Cards"
				subtitle="On this page you can find all business cards from all categories"
			/>
			<CardsFeedback
				isLoading={isLoading}
				cards={cards}
				error={error}
			/>
			{user && user.isBusiness && <AddNewCardButton />}
		</>
	);
}
