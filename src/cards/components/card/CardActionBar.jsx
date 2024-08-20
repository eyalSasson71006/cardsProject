import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import { useCurrentUser } from "../../../users/providers/UserProvider";
import useCards from "../../hooks/useCards";

export default function CardActionBar({ card }) {
	const { user } = useCurrentUser();
	const { handleDelete, handleEdit, handleLike } = useCards();
	const [liked, setLiked] = useState(card.likes.includes(user._id));

	function handleRender() {
		if (!user) return false;
		if (user.isAdmin || card.user_id == user._id) return true;
	}

	async function handleLikeClick (){
		setLiked(await handleLike(card._id))
	}
	
	return (
		<>
			<CardActions sx={{ justifyContent: "space-between" }}>
				<Box>
					<IconButton
						onClick={() => {
							location.href = "tel:" + card.phone;
						}}
					>
						<CallIcon />
					</IconButton>
					{user && (
						<IconButton onClick={handleLikeClick}>
							<FavoriteIcon color={liked ? "error" : ""} />
						</IconButton>
					)}
				</Box>
				{handleRender() && (
					<Box>
						<IconButton onClick={() => handleDelete(card._id)}>
							<DeleteIcon />
						</IconButton>
						<IconButton onClick={() => handleEdit(card._id)}>
							<ModeEditIcon />
						</IconButton>
					</Box>
				)}
			</CardActions>
		</>
	);
}
