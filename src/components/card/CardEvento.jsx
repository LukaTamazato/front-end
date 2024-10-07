import { ButtonBase, Paper, Typography } from "@mui/material";
import React from "react";

const CardEvento = ({titulo}) => {
    return (
            <ButtonBase sx={{ width: { sm: "100%", md: 250 }}}>
                <Paper sx={{p: 5, width: { sm: "100%", md: 250 }, maxWidth: "100%"}}>
                    <Typography variant="h5" component="h5">{titulo}</Typography>
                </Paper>
            </ButtonBase>
    )
}

export default CardEvento;