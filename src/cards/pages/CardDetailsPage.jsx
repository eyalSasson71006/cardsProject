import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Container, IconButton, Link, Typography } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Spinner from "../../components/Spinner";
import useCards from "../hooks/useCards";
import Error from "../../components/Error";
import { changeLikeStatus } from "../services/cardsApiService";
import { useCurrentUser } from "../../users/providers/UserProvider";
import CardActionBar from "../components/card/CardActionBar";
import { useSearchContext } from "../../providers/SearchProvider";

export default function CardDetailsPage() {
	const { card, getCardsById, isLoading, error } = useCards();
	const { id } = useParams();
	const { setSearchVisibility } = useSearchContext();

	setSearchVisibility(false);

	useEffect(() => {
		getCardsById(id);
	}, [id]);

	if (isLoading) return <Spinner />;
	if (error) return <Error errorMessage={error} />;

	return (
		<Box>
			<PageHeader title={card.title} subtitle={card.subtitle} />
			<Container
				sx={{
					display: "flex",
					flexWrap: "wrap-reverse",
					marginBottom: "30px",
					justifyContent: "center",
					alignItems: "center",
					gap: "40px",
				}}
			>
				<Box>
					<Typography variant="h5" color="text.secondary">
						<strong>Phone: </strong>
						{card.phone}
					</Typography>
					<Typography variant="h5" color="text.secondary">
						<strong>Address: </strong>
						{card.address.city} {card.address.street}{" "}
						{card.address.houseNumber}
					</Typography>
					<Typography variant="h5" color="text.secondary">
						<strong>Email: </strong>
						{card.email}
					</Typography>
					<Typography variant="h5" color="text.secondary">
						<strong>Card Number: </strong>
						{card.bizNumber}
					</Typography>
					<Typography variant="h5" color="text.secondary">
						<strong>Created At: </strong>
						{card.createdAt.split("T")[0]}
					</Typography>
				</Box>
				<Link href={card.web}>
					<img
						src={card.image.url}
						alt={card.image.alt}
						style={{
							width: "clamp(250px,35vw, 450px)",
							maxHeight: "50vh",
							objectFit: "cover",
							borderRadius: "10px",
						}}
					/>
				</Link>
			</Container>
			<Container sx={{ textAlign: "center" }}>
				<Typography variant="h6" color="text.secondary">
					"{card.description}""
				</Typography>
				<Typography
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: "5px",
						fontWeight: "bold",
					}}
				>
					<CardActionBar card={card} />
				</Typography>
			</Container>
		</Box>
	);
}
