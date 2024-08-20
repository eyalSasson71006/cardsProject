import { Button } from '@mui/material';
import React from 'react'

export default function MyButton({children}) {
  return (
    <Button sx={{
      color:"#fff",
       backgroundColor:"#4caf50",
      '&:hover': {backgroundColor: "#45a049"}}}>
        {children}
    </Button>
  )
}
