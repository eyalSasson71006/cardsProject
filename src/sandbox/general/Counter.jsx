import { Button, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const handleClickPlus = () => {
    setCounter((prev) => prev + 1);
  };

  const handleClickMinus = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <div>
      <Typography>{counter}</Typography>
      <Button onClick={handleClickPlus}>+</Button>
      <Button onClick={handleClickMinus}>-</Button>
    </div>
  );
}
