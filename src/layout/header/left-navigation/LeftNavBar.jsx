import { Box } from '@mui/material';
import React from 'react'
import Logo from './logo/Logo';
import LogoIcon from './logo/LogoIcon';
import NavBarItem from "../../../routes/components/NavBarItem";
import ROUTES from "../../../routes/routesModel";
import { useCurrentUser } from '../../../users/providers/UserProvider';


export default function LeftNavBar() {
	const {user} = useCurrentUser()
  return (
		<Box sx={{ display: "flex", alignItems: "center" }}>
			<LogoIcon />
			<Logo />
			{user && <NavBarItem to={ROUTES.CARDS} label={"Cards"} />}
			<NavBarItem to={ROUTES.ABOUT} label={"About"} />
			<NavBarItem to={ROUTES.SANDBOX} label={"SandBox"} />
		</Box>
  );
}
