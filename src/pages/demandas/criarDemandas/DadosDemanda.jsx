import { Typography, FormControl, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CampoTexto from "../../../components/input/CampoTexto";
import DataHora from "../../../components/input/DataHora";
import axios from "axios";
import Picklist from "../../../components/input/Picklist";
import dayjs from "dayjs";
import { eventos } from "../../../utils/dataMockUtil";

const DadosDemanda = ({handleDadosChange, dadosDemanda, setDadosDemanda, hasParams}) => {

    const handleTimeChange = (e, name) => {
        setDadosDemanda({ ...dadosDemanda, [name]: e.format() });
    };

    const handleEventoChange = (e) => {
        e.target.value = eventos.find(f => f.id === e.target.value);
        handleDadosChange(e, 'evento');
    }

    return (
        <>
            <Grid mb={2} mt={6} display={"flex"} justifyContent={"center"} width="100%" size={12}>
                <Typography variant="h5" component="h5">Dados da Demanda</Typography>
            </Grid>
            <Grid width="80%" margin="auto" container columnSpacing={2}>
                <CampoTexto size={12} handleChange={handleDadosChange} value={dadosDemanda.nome} name="nome" label="Nome"/>
                <DataHora handleChange={(e) => handleTimeChange(e, 'inicio')} value={dadosDemanda.inicio != "" ? dayjs(dadosDemanda.inicio) : null} name="inicio" label="Início"/>
                <DataHora handleChange={(e) => handleTimeChange(e, 'fim')} value={dadosDemanda.fim != "" ? dayjs(dadosDemanda.fim) : null} name="fim" label="Fim"/>
                <CampoTexto handleChange={handleDadosChange} value={dadosDemanda.responsavel} name="responsavel" label="Responsável"/>
                <Picklist disabled={hasParams} items={eventos} name="evento" label={"Evento"} handleChange={handleEventoChange} value={dadosDemanda.evento.id}/>
            </Grid>
        </>
    );
}

export default DadosDemanda;