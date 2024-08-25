import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useUsers from "../hooks/useUsers";
import { Avatar, Box, Container, Typography } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import BlockIcon from "@mui/icons-material/Block";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useSearchContext } from "../../providers/SearchProvider";

export default function UserProfilePage() {
	const { user } = useCurrentUser();
	const { getUserById, error, isLoading } = useUsers();
	const [userData, setUserData] = useState();

	const { setSearchVisibility } = useSearchContext();
	useEffect(()=>{
		setSearchVisibility(false);
	},[])

	if (!user) return <Navigate to={ROUTES.ROOT} replace />;

	useEffect(() => {
		const getData = async () => {
			setUserData(await getUserById(user._id));
		};
		getData();
	}, [user]);

	if (isLoading) return <Spinner />;
	if (error) return <Error errorMessage={error} />;
	return (
		<Box>
			<PageHeader
				title={`${userData.name.first} ${userData.name.last}'s Profile`}
				subtitle={"On this page you can view your profile details"}
			/>
			<Avatar
				alt={userData.image.alt}
				src={userData.image.url || "/avatar.png"}
				sx={{ width: "12vw", height: "12vw", margin: "40px auto" }}
			/>
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
						<strong>Country: </strong>
						{userData.address.country},
					</Typography>
					<Typography variant="h5" color="text.secondary">
						<strong>Address: </strong>
						{userData.address.city}, {userData.address.street},{" "}
						{userData.address.houseNumber}
					</Typography>
					<Typography variant="h5" color="text.secondary">
						<strong>Email: </strong>
						{userData.email}
					</Typography>
					<Typography variant="h5" color="text.secondary">
						<strong>Phone: </strong>
						{userData.phone}
					</Typography>
					<Typography variant="h5" color="text.secondary">
						<strong>Created At: </strong>
						{userData.createdAt.split("T")[0]}
					</Typography>
				</Box>
				<Box>
					<Typography variant="h4" color="text.secondary">
						<strong>
							{userData.isAdmin ? (
								<CheckCircleOutlineIcon />
							) : (
								<BlockIcon />
							)}
							Admin
						</strong>
					</Typography>
					<Typography variant="h4" color="text.secondary">
						<strong>
							{userData.isBusiness ? (
								<CheckCircleOutlineIcon />
							) : (
								<BlockIcon />
							)}
							Business
						</strong>
					</Typography>
				</Box>
			</Container>
		</Box>
	);
}
