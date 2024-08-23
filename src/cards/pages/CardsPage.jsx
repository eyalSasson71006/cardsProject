import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";
import AddNewCardButton from "../components/AddNewCardButton";
import { useCurrentUser } from "../../users/providers/UserProvider";
import { useSearchContext } from "../../providers/SearchProvider";

export default function CardsPage() {
	const { user } = useCurrentUser();
	const { cards, error, isLoading, getAllCards } = useCards();
	const { searchInput, setSearchVisibility } = useSearchContext();

	setSearchVisibility(true);

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
				cards={cards.filter((card) => card.title.includes(searchInput))}
				error={error}
			/>
			{user && user.isBusiness && <AddNewCardButton />}
		</>
	);
}
