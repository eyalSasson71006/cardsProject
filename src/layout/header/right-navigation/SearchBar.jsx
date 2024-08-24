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
	const { setSearchInput, searchVisibility, setSearchVisibility } =
		useSearchContext();

	const handleSearch = (e) => {
		const { value } = e.target;
		setSearchInput(value);
	};
	return (
		<>
			{searchVisibility && (
				<OutlinedInput
					sx={{
						m: 1,
						borderRadius: "5px",
						backgroundColor: theme.bgc,
					}}
					placeholder="Search"
					onChange={handleSearch}
					endAdornment={
						<InputAdornment position="end">
							<SearchIcon />
						</InputAdornment>
					}
				></OutlinedInput>
			)}
		</>
	);
}
