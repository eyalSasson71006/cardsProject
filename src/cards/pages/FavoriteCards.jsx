import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";
import AddNewCardButton from "../components/AddNewCardButton";
import { useCurrentUser } from "../../users/providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useSearchContext } from "../../providers/SearchProvider";

export default function FavoriteCards() {
	const { user } = useCurrentUser();
	const { cards, error, isLoading, getAllCards, handleDelete, handleLike } =
		useCards();
	const { searchInput, setSearchVisibility } = useSearchContext();
	useEffect(() => {
		setSearchVisibility(true);
	}, []);

	useEffect(() => {
		getAllCards();
	}, []);

	if (!user) return <Navigate to={ROUTES.CARDS} />;

	return (
		<>
			<PageHeader
				title="Favorite Cards"
				subtitle="On this page you can find all your favorite business cards"
			/>
			<CardsFeedback
				isLoading={isLoading}
				cards={cards.filter(
					(card) =>
						card.likes.includes(user._id) &&
						card.title.includes(searchInput)
				)}
				error={error}
				handleDelete={handleDelete}
				handleLike={handleLike}
			/>
			{user && user.isBusiness && <AddNewCardButton />}
		</>
	);
}
