import { Box } from "@mui/material";
import React from "react";
import CircleIcon from '@mui/icons-material/Circle';
import { useTheme } from "@emotion/react";
const Esteira = ({fase, setFase, qtdFases}) => {

    const handleClick = (novaFase) => {
        if (Math.abs(fase-novaFase) !== 1) return;
        setFase(novaFase);
    }
    

    return (
        <Box display={"flex"} mb={2} gap={1}>
            {
                Array.from({ length: qtdFases }).map((_, i) => (
                    <span key={i} style={{cursor: (i >= fase-1 && i <= fase+1) ? "pointer" : "default", borderRadius: "50%"}} ><Circle handleClick={handleClick} fase={fase} atual={i} ativo={fase >= i}/></span>
                ))
            }
        </Box>
    );
}

const Circle = ({ativo, atual, fase, handleClick}) => {
    const theme = useTheme();

    return (
        <>
            {atual === fase ? (
            <CircleIcon onClick={() => {handleClick(atual)}} sx={[{ transition: '300ms', fontSize: 40, color: theme.palette.secondary.main }, { '&:hover': {color: theme.palette.secondary.dark} }]} />) 
            : ( <CircleIcon onClick={() => {handleClick(atual)}} sx={[{ transition: '300ms', fontSize: 40, color: ativo ? theme.palette.secondary.light : "#e1e1e1"}, { '&:hover': {color: ativo ? theme.palette.secondary.light : "#eaeaea"} }]} /> )}
        </>
    );
}

export default Esteira;