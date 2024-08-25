import React, { useEffect } from "react";
import PageHeader from "../components/PageHeader";
import { Container, Grid, Typography } from "@mui/material";
import { useSearchContext } from "../providers/SearchProvider";

export default function AboutPage() {
	const { setSearchVisibility } = useSearchContext();

	useEffect(()=>{
		setSearchVisibility(false);
	},[])
	return (
		<>
			<PageHeader
				title="About"
				subtitle="Discover How BCard Brings Businesses and Users Together"
			/>
			<Grid
				container
				spacing={2}
				justifyContent="center"
				alignItems={"center"}
				mt={4}
			>
				<Grid item xs={12} md={8}>
					<Typography>
						Welcome to BCard, your go-to platform for connecting
						businesses and customers through personalized business
						cards. Whether you're a business owner looking to
						showcase your brand or a consumer searching for
						services, BCard makes it easy. Business owners can sign
						up, create, and display their unique business cards,
						allowing them to reach a broader audience. As a visitor,
						you can explore and discover businesses, and if you sign
						up, you can even like and save your favorite cards.
						BCard is more than just a directory; it’s a community
						where businesses and customers connect and grow
						together.
					</Typography>
				</Grid>
				<Grid item xs={"auto"} md={"auto"}>
					<img
						style={{ width: "100%", maxWidth: "250px" }}
						src="/cardPreview.png"
						alt="card preview"
					/>
				</Grid>
			</Grid>
		</>
	);
}
