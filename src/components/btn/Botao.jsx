import { Button } from '@mui/material';
import * as React from 'react';

const Botao = ({ color = "secondary", variant = "contained", txt, onClick, style }) => {
    return (
        <Button sx={style} onClick={onClick} color={color} variant={variant}>
            {txt}
        </Button>
    )
}

export default Botao;