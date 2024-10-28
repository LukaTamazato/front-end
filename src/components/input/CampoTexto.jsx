import { InputAdornment, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useState } from "react";
import { aplicarMascara } from "../../utils/formatarUtil";

const CampoTexto = ({
  handleChange = () => {},
  label,
  name,
  sx,
  value,
  size = { sm: 12, md: 6 },
  regex,
  mascara,
  placeholder,
  errorMsg = "",
  style,
  required,
  onKeyUp = () => {},
  type = "text",
  margin = "normal",
  startAdornment = null,
}) => {
  const [possuiErro, setErro] = useState(false);

  const handleOnChange = (e) => {
    let valorAtual = e.target.value;

    if (mascara) valorAtual = aplicarMascara(valorAtual, mascara);
    if (regex)
      setErro(
        (required || e.target.value.length !== 0) && !regex.test(valorAtual)
      );

    e.target.value = valorAtual;

    handleChange(e, name);
  };

  return (
    <Grid size={size}>
      <TextField
        type={type}
        sx={sx}
        placeholder={placeholder}
        fullWidth
        margin={margin}
        label={label}
        name={name}
        value={value}
        onChange={handleOnChange}
        error={possuiErro}
        helperText={possuiErro ? errorMsg : ""}
        required={required}
        onKeyUp={onKeyUp}
        variant="outlined"
        slotProps={{
          input: {
            startAdornment: startAdornment ? (
              <InputAdornment position="start">{startAdornment}</InputAdornment>
            ) : null,
            style: style,
          },
        }}
      />
    </Grid>
  );
};

export default CampoTexto;
