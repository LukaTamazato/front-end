import React, { useEffect, useState } from "react";
import Dialogo from "../../components/dialogo/Dialogo";
import CardEvento from "../../components/card/CardEvento";
import { Box } from "@mui/material";
import Botao from "../../components/btn/Botao";
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from "react-router-dom";
import { buscarEventos } from "../../services/EventoService";
import { formatarCardEvento } from "../../utils/formatarUtil";

const Eventos = ({setTitulo, setActions}) => {

    useEffect(() => {
        setTitulo("Eventos");
        listarEventos();
    },[])

    const listarEventos = async () => {
        const eventos = await buscarEventos();
        setEventos(formatarCardEvento(eventos));
    }

    const navigate = useNavigate();
    useEffect(() => {
        const actions = [
            {label: "Criar", handleClick: (() => navigate('/eventos/criar')), icon: (<CreateIcon/>)}
        ]

        setActions(actions);
    }, [setActions, navigate])

    const [eventos, setEventos] = useState([]);

    return (
        <Box>
        <Box display={"flex"} flexWrap={"wrap"} gap={2}>
            {(eventos && eventos.map((evento, index) => {
                return (
                    <CardEvento handleClick={() => navigate(`/eventos/${evento.id}`)} key={index} titulo={evento.evento} date={evento.date} endereco={evento.endereco} />
                );
            }))}
        </Box>
        </Box>
    )
}

export default Eventos;