import React, { useEffect } from "react";
import Dialogo from "../components/dialogo/Dialogo";
import CardEvento from "../components/card/CardEvento";
import { Box } from "@mui/material";
import Botao from "../components/btn/Botao";
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from "react-router-dom";

const EventosAbertos = ({setTitulo, setActions}) => {

    useEffect(() => {
        setTitulo("Eventos Abertos");
        setActions(actions);
    })

    const navigate = useNavigate();

    const actions = [
        {label: "Criar", handleClick: (() => navigate('/eventos/criar')), icon: (<CreateIcon/>)}
    ]

    return (
        <Box>
        <Box display={"flex"} flexWrap={"wrap"} gap={4}>
            <CardEvento titulo="Linkin Park" />
            <CardEvento titulo="Linkin Park" />
            <CardEvento titulo="Linkin Park" />
            <CardEvento titulo="Linkin Park" />
            <CardEvento titulo="Linkin Park" />
            <CardEvento titulo="Linkin Park" />
            <CardEvento titulo="Linkin Park" />
            <CardEvento titulo="Linkin Park" />
            <CardEvento titulo="Linkin Park" />
            <CardEvento titulo="Linkin Park" />
            <CardEvento titulo="Linkin Park" />
            <CardEvento titulo="Linkin Park" />
            <CardEvento titulo="Linkin Park" />
            <CardEvento titulo="Linkin Park" />
            <CardEvento titulo="Linkin Park" />
            <CardEvento titulo="Linkin Park" />
            <CardEvento titulo="Linkin Park" />
        </Box>
        </Box>
    )
}

export default EventosAbertos;