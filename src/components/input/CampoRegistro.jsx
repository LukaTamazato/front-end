import { Button, InputAdornment, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { aplicarMascara } from "../../utils/formatarUtil";
import { useState } from "react";

const CampoRegistro = ({ editando, handleChange, label, name, value, startAdornment, sx, size={sm: 12, md: 6}}, mascara, regex, required) => {

    const [possuiErro, setErro] = useState(false);

    const handleOnChange = (e) => {
        if (!editando) {
            e.preventDefault();
            return;
        }

        let valorAtual = e.target.value;

        if (mascara) valorAtual = aplicarMascara(valorAtual, mascara);
        if (regex) setErro((required || e.target.value.length !== 0) && !regex.test(valorAtual));

        e.target.value = valorAtual;

        handleChange(e, name);
        console.log('aqui')
    }

    return (
        <Grid size={size}>
            <TextField
            fullWidth
            margin="normal"
            label={label}
            name={name}
            value={value}
            onChange={handleOnChange}
            error={possuiErro}
            required={required}
            sx={sx}
            slotProps={{
                input: {
                    startAdornment: startAdornment ? <InputAdornment position="start">{startAdornment}</InputAdornment> : null,
                    readOnly: !editando
                }
            }}
            variant={editando ? "outlined" : "standard"}
            />
        </Grid>
    );
}

export default CampoRegistro;