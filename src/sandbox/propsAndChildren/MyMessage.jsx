import { Box } from '@mui/material';
import React from 'react'

export default function MyMessage({children}) {
  return (
    <Box
      sx={{
        border: "1px solid black",
        backgroundColor: "#ff6a6a", //"#EE4B2B",
      }}
    >
      {children}
    </Box>
  );
}
