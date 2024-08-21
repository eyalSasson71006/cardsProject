import {
	IconButton,
	InputAdornment,
	OutlinedInput,
	TextField,
	useTheme,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchContext } from "../../../providers/SearchProvider";

export default function SearchBar() {
	const theme = useTheme();
	const { setSearchInput } = useSearchContext();

	const handleSearch = (e) => {
		const { value } = e.target;
		setSearchInput(value);
	};
	return (
		<OutlinedInput
			sx={{
				m: 1,
				width: "25ch",
				borderRadius: "5px",
				backgroundColor: theme.bgc,
			}}
			onChange={handleSearch}
			endAdornment={
				<InputAdornment position="end">
					<SearchIcon />
				</InputAdornment>
			}
		></OutlinedInput>
	);
}
