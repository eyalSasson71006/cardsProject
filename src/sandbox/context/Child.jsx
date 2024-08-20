import { Typography } from '@mui/material';
import React from 'react'
import GrandChild from './GrandChild';

export default function Child() {
  return (
    <div>
        <Typography>This is Child</Typography>
        <GrandChild/>
    </div>
  )
}
