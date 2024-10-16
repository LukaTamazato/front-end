import React, { useEffect, useState } from "react";
import Dialogo from "../../components/dialogo/Dialogo";
import CardDemanda from "../../components/card/CardDemanda";
import { Box } from "@mui/material";
import Botao from "../../components/btn/Botao";
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from "react-router-dom";
import { buscarDemandas } from "../../services/DemandaService";
import { formatarCardDemanda } from "../../utils/formatarUtil";

const Demandas = ({setTitulo, setActions}) => {

    useEffect(() => {
        setTitulo("Demandas");
        listarDemandas();
    },[])

    const listarDemandas = async () => {
        const demandas = await buscarDemandas();
        setDemandas(formatarCardDemanda(demandas));
    }

    const navigate = useNavigate();
    useEffect(() => {
        const actions = [
            {label: "Criar", handleClick: (() => navigate('/demandas/criar')), icon: (<CreateIcon/>)}
        ]

        setActions(actions);
    }, [setActions, navigate])

    const [demandas, setDemandas] = useState([]);

    return (
        <Box>
        <Box display={"flex"} flexWrap={"wrap"} gap={2}>
            {(demandas && demandas.map((demanda, index) => {
                return (
                    <CardDemanda key={index} titulo={demanda.demanda} date={demanda.date} endereco={demanda.endereco} />
                );
            }))}
        </Box>
        </Box>
    )
}

export default Demandas;