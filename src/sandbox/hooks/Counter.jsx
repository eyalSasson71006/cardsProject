import { Button, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import useCounter from "./useCounter";
export default function Counter() {
	const {
		counter,
		jumps,
		increment,
		decrement,
		handleReset,
		handleChangeJumps,
	} = useCounter();
	return (
		<div>
			<Typography>{counter}</Typography>
			<Button onClick={increment}>+</Button>
			<Button onClick={decrement}>-</Button>
			<Select
				value={jumps}
				label="Jumps"
				onChange={(e) => handleChangeJumps(e.target.value)}
			>
				<MenuItem value={1}>1</MenuItem>
				<MenuItem value={2}>2</MenuItem>
				<MenuItem value={3}>3</MenuItem>
			</Select>
			<Button onClick={handleReset}>Reset</Button>
		</div>
	);
}
