import { InputAdornment, TextField } from "@mui/material";
import Grid from '@mui/material/Grid2';
import React, { useState } from "react";
import { aplicarMascara } from "../../utils/formatarCampoUtil";

const CampoTexto = ({handleChange, label, name, value, size={ sm: 12, md: 6 }, regex, mascara, placeholder, errorMsg="", required, type="text", startAdornment=""}) => {

    const [possuiErro, setErro] = useState(false);

    const handleOnChange = (e) => {
        let valorAtual = e.target.value;

        if (mascara) valorAtual = aplicarMascara(valorAtual, mascara);
        if (regex) setErro((required || e.target.value.length !== 0) && !regex.test(valorAtual));

        e.target.value = valorAtual;

        handleChange(e, name);
    }

    return (
        <Grid size={size}>
            <TextField
                type={type}
                placeholder={placeholder}
                fullWidth
                margin="normal"
                label={label}
                name={name}
                value={value}
                onChange={handleOnChange}
                error={possuiErro}
                helperText={possuiErro ? errorMsg : ""}
                required={required}
                slotProps={{
                    input: {
                        startAdornment: startAdornment ? <InputAdornment position="start">{startAdornment}</InputAdornment> : null
                    }
                }}
            />
        </Grid>
    );
}

export default CampoTexto;