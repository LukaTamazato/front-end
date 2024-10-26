import { Button } from "@mui/material";
import * as React from "react";

const Botao = ({
  color = "secondary",
  variant = "contained",
  txt,
  onClick,
  sx,
}) => {
  return (
    <Button sx={sx} onClick={onClick} color={color} variant={variant}>
      {txt}
    </Button>
  );
};

export default Botao;
