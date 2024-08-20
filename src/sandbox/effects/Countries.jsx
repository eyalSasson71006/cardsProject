import {
	Box,
	Card,
	CardActionArea,
	CircularProgress,
	Container,
	TextField,
	Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CardHeaderComponent from "../../cards/components/card/CardHeaderComponent";

export default function Countries() {
	const [textInput, setTextInput] = useState("");
	const [allCountries, setAllCountries] = useState([]);
	const [filteredCountries, setFilteredCountries] = useState([]);

	useEffect(() => {
		const getCountries = async () => {
			let data = await (
				await fetch("https://restcountries.com/v3.1/all")
			).json();
			setAllCountries(data);
			setFilteredCountries(data);
		};
		getCountries();
	}, []);

	useEffect(() => {
		setFilteredCountries(
			allCountries.filter((country) => {
				return country.name.common.toLowerCase().includes(textInput);
			})
		);
	}, [textInput]);

	if (filteredCountries.length == 0) {
		return (
			<Container
				sx={{
					display: "flex",
					height: "100vh",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<CircularProgress />;
			</Container>
		);
	}

	return (
		<Container sx={{ display: "grid", justifyContent: "center" }}>
			<TextField
				value={textInput}
				label={"Country Name"}
				onChange={(e) => setTextInput(e.target.value.toLowerCase())}
			/>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					gap: 1,
				}}
			>
				{filteredCountries.map((country, index) => (
					<Card key={index} sx={{ width: 250, m: 2, p: 2 }}>
						<CardActionArea>
							<CardHeaderComponent
								image={country.flags.png}
								title={country.name.common}
							/>
							<Typography>Capital: {country.capital}</Typography>
							<Typography>
								Languages:{" "}
								{country.languages
									? Object.values(country.languages).join(
											", "
									  )
									: "None"}
							</Typography>
							<Typography>
								Continents:{" "}
								{country.continents.join(", ") || "None"}
							</Typography>
							<Typography>
								Population:{" "}
								{country.population.toLocaleString() || "None"}
							</Typography>
						</CardActionArea>
					</Card>
				))}
			</Box>
		</Container>
	);
}
