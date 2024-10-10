import { Box, FormControl, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Picklist from "../../components/input/Picklist";
import CampoTexto from "../../components/input/CampoTexto";
import Botao from "../../components/btn/Botao";
import PillContainer from "../../components/pill/Pill";
import { documentos, funcoesAlocacao, tiposContrato } from "../../utils/dataMockUtil";
import { useState } from "react";

const CadastrarVagas = ({vagas, setVagas}) => {


    const [vagaAtual, setVagaAtual] = useState({
        funcao: "",
        quantidade: ""
    });

    const handleChange = (e, name) => {
        setVagaAtual({ ...vagaAtual, [name]: e.target.value });
    };

    const cadastrarVaga = () => {

        const novaVaga = {
            id: vagas.length > 0 ? vagas[vagas.length - 1].id + 1 : 0,
            funcao: vagaAtual.funcao,
            quantidade: vagaAtual.quantidade
        }

        const campoVazio = Object.keys(novaVaga).some((key) => {
            return novaVaga[key] === "";
        });

        if (campoVazio) return;

        setVagas([...vagas, novaVaga]);

        setVagaAtual({
            funcao: "",
            quantidade: ""
        });
    }

    return (
        <>
        <Grid mt={4} alignItems={"center"} container flexDirection={"column"} size={{sm: 12, md: 6}}>
            <Typography mb={6} variant="h5" component="h5">Cadastrar Vaga</Typography>
            <FormControl sx={{width: '70%', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <Picklist label={"Função"} name={"funcao"} value={vagaAtual.funcao} handleChange={handleChange} items={funcoesAlocacao} />
                <CampoTexto size={12} handleChange={handleChange} mascara="numeroPositivo" name="quantidade" value={vagaAtual.quantidade} label="Qtd Colaboradores"/>
                <CampoTexto size={12} label="Qtd Horas"/>
                <CampoTexto size={12} label="Valor"/>
                <Botao sx={{mt: 2}} txt="Inserir Vaga" onClick={() => {cadastrarVaga()}} />
            </FormControl>
        </Grid>
        <Grid mt={4} size={{sm: 12, md: 6}}>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                <Typography mb={6} variant="h5" component="h5">Vagas Cadastradas</Typography>
                <PillContainer setVagas={setVagas} pills={vagas}/>
            </Box>
        </Grid>
        </>
    );
}

export default CadastrarVagas;