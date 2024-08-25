import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import { useCurrentUser } from "../../users/providers/UserProvider";
import useCards from "../hooks/useCards";
import CardsFeedback from "../components/CardsFeedback";
import AddNewCardButton from "../components/AddNewCardButton";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useSearchContext } from "../../providers/SearchProvider";

export default function MyCards() {
	const { user } = useCurrentUser();
	const {
		myCards,
		error,
		isLoading,
		HandleGetMyCards,
		handleDelete,
		handleLike,
	} = useCards();
	const { searchInput, setSearchVisibility } = useSearchContext();
	useEffect(()=>{
		setSearchVisibility(true);
	},[])

	useEffect(() => {
		HandleGetMyCards();
	}, []);

	if (!user) return <Navigate to={ROUTES.CARDS} />;

	return (
		<>
			<PageHeader
				title="My Cards"
				subtitle="On this page you can find all your business cards"
			/>
			<CardsFeedback
				isLoading={isLoading}
				cards={myCards.filter((card) =>
					card.title.includes(searchInput)
				)}
				error={error}
				handleDelete={handleDelete}
				handleLike={handleLike}
			/>
			<AddNewCardButton />
		</>
	);
}
