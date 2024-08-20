import { Typography } from '@mui/material';
import React from 'react'
import Child from './Child';

export default function Parent() {
  return (
		<div>
			<Typography>This is Parent</Typography>
            <Child/>
		</div>
  );
}
