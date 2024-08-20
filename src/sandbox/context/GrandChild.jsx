import { Typography } from "@mui/material";
import React from "react";
import { useData } from "./DataProvider";

export default function GrandChild() {
    const result = useData()
    console.log(result);
    
	return (
		<div>
			<Typography>This is Grand Child</Typography>
		</div>
	);
}
