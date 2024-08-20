import { Avatar, IconButton } from '@mui/material';
import React from 'react'
import NavBarLink from '../../../../routes/components/NavBarLink';
import ROUTES from '../../../../routes/routesModel';

export default function LogoIcon() {
  return (
		<NavBarLink to={ROUTES.ROOT}>
			<IconButton>
				<Avatar alt="logo icon" src="/avatarpng.png" />
			</IconButton>
		</NavBarLink>
  );
}
