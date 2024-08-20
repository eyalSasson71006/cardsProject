import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Error = ({ errorMessage }) => {
	return (
		<Container
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<img
				style={{ width: "300px" }}
				src="/img404.png"
				alt="broken robot"
			/>
			<Typography m={2} variant="h5" component="h3">
				Oops... something went wrong: {errorMessage}
			</Typography>
		</Container>
	);
};
export default Error;
