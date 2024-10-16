import Grid from "@mui/material/Grid2";
import { DateTimePicker } from "@mui/x-date-pickers";
import React from "react";

const DataHora = ({handleChange, name, label, value}) => {
    return (
        <Grid size={6}>
            <DateTimePicker
                ampm={false} 
                onChange={handleChange} 
                name={name}
                label={label}
                value={value}
                sx={{width: "100%", mt: 2}}
            />
        </Grid>
    );
}

export default DataHora;