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
    })

    const navigate = useNavigate();
    useEffect(() => {
        const actions = [
            {label: "Criar", handleClick: (() => navigate('/eventos/criar')), icon: (<CreateIcon/>)}
        ]

        setActions(actions);
    }, [setActions, navigate])

    const eventos = [
        {evento: "Linkin Park0", date: {dia: "09", mes: "JUL"}, endereco: "Rua Haddock Lobo, 552"},
        {evento: "Linkin Park1", date: {dia: "10", mes: "JUL"}, endereco: "Rua Haddock Lobo, 553"},
        {evento: "Linkin Park2", date: {dia: "11", mes: "JUL"}, endereco: "Rua Haddock Lobo, 554"},
        {evento: "Linkin Park3", date: {dia: "12", mes: "JUL"}, endereco: "Rua Haddock Lobo, 555"},
        {evento: "Linkin Park4", date: {dia: "13", mes: "JUL"}, endereco: "Rua Haddock Lobo, 556"},
        {evento: "Linkin Park5", date: {dia: "14", mes: "JUL"}, endereco: "Rua Haddock Lobo, 557"}
    ]

    return (
        <Box>
        <Box display={"flex"} flexWrap={"wrap"} gap={2}>
            {(eventos && eventos.map((evento, index) => {
                return (
                    <CardEvento key={index} titulo={evento.evento} date={evento.date} endereco={evento.endereco} />
                );
            }))}
        </Box>
        </Box>
    )
}

export default EventosAbertos;