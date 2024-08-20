import React from 'react'
import Parent from './Parent';
import { Typography } from '@mui/material';
import DataProvider from './DataProvider';

export default function GrandParent() {
  return (
		<div>
			<Typography>This is Grand Parent</Typography>

			<DataProvider>
				<Parent />
			</DataProvider>
		</div>
  );
}
