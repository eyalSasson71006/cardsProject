import { FormControl, OutlinedInput, TextField, useTheme } from '@mui/material';
import React from 'react'

export default function SearchBar() {
    const theme = useTheme();
  return (
		<TextField
			sx={{
				m: 1,
				width: "25ch",
				borderRadius: "5px",
			}}
			// variant="outlined"
			// backgroundColor={theme.bgc}
		>
			<OutlinedInput label={"Search"} />
		</TextField>
  );
}
