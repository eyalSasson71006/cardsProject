import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { makeFirstLetterCapital } from "../utils/algoMethods";
import {
	FormControl,
	FormHelperText,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function PasswordInput({
	variant = "outlined",
	name = "password",
	data,
	label = "Password *",
	required = true,
	error,
	onChange,
	...rest
}) {
    const [visibility, setVisibility] = useState(false)
    const toggleVisibility = ()=>{
        setVisibility(prev=>!prev)
    }

	return (
		<Grid item xs={12} {...rest}>
			<FormControl sx={{width:"100%"}} variant="outlined">
				<InputLabel htmlFor={name}>{label}</InputLabel>
				<OutlinedInput
					variant={variant}
					type={visibility ? "text" : "password"}
					id={name}
					name={name}
                    label={label}
					required={required}
					error={Boolean(error)}
					fullWidth={true}
					autoComplete="off"
					value={data[name] ? data[name] : ""}
					onChange={onChange}
					endAdornment={
						<InputAdornment position="end">
							<IconButton onClick={toggleVisibility}>
								{visibility ? <VisibilityOffIcon/> : <VisibilityIcon />}
							</IconButton>
						</InputAdornment>
					}
				></OutlinedInput>
				<FormHelperText id={name} error={Boolean(error)}>
					{error}
				</FormHelperText>
			</FormControl>
		</Grid>
	);
}
