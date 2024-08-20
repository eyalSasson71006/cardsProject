import { Button, Typography } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import SimpleComponent from './SimpleComponent';

export default function Counter() {
    const [counter,setCounter] = useState(0)
  return (
    <div>
        <Typography>{counter}</Typography>
        <Button onClick={()=>setCounter(prev => prev+1)}>+</Button>
        <SimpleComponent/>
    </div>
  )
}
