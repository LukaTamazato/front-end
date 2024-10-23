import { InputAdornment, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";

const CampoRegistro = ({label, value, startAdornment, sx, size={sm: 12, md: 6}}) => {
    return (
        <Grid size={size}>
            <TextField
            sx={sx}
            fullWidth
            slotProps={{
                input: {
                    startAdornment: startAdornment ? <InputAdornment position="start">{startAdornment}</InputAdornment> : null,
                    readOnly: true
                }
            }}
            label={label} 
            value={value} 
            variant="standard"
            onChange={(e) => e.preventDefault()}
            />
        </Grid>
    );
}

export default CampoRegistro;