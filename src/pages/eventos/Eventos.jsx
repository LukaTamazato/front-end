import React, { useEffect, useState } from "react";
import Dialogo from "../../components/dialogo/Dialogo";
import CardEvento from "../../components/card/CardEvento";
import { Box } from "@mui/material";
import Botao from "../../components/btn/Botao";
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from "react-router-dom";
import { buscarEventos } from "../../services/EventoService";
import { numToMes } from "../../utils/formatarUtil";
import dayjs from "dayjs";
import defaultimg from "../../assets/evento-card-bg.png"

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
                    <CardEvento handleClick={() => navigate(`/eventos/${evento.id}`)} key={index} titulo={evento.evento} date={evento.date} endereco={evento.endereco} url={evento.url} />
                );
            }))}
        </Box>
        </Box>
    )
}

const formatarCardEvento = (eventos) => {
    const eventosFmt = [];

    eventos.forEach((e) => {
        const date = dayjs(e.fim);
        eventosFmt.push({
            id: e.id,
            evento: e.nome,
            date: {
                dia: date.date(),
                mes: numToMes(date.month())
            },
            endereco: `${e.logradouro}, ${e.numero}`,
            url: e.imagem != null ? e.imagem : defaultimg
        })
    })

    return eventosFmt;
}

export default Eventos;