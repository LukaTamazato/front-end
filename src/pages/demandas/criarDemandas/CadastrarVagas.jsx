import { Box, FormControl, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Picklist from "../../../components/input/Picklist";
import CampoTexto from "../../../components/input/CampoTexto";
import Botao from "../../../components/btn/Botao";
import PillContainer from "../../../components/pill/Pill";
import { documentos, funcoesAlocacao, tiposContrato } from "../../../utils/dataMockUtil";
import { useState } from "react";
import { useTheme } from "@emotion/react";

const CadastrarVagas = ({dadosDemanda, setDadosDemanda, adicionarVaga}) => {

    const theme = useTheme();

    const setVagas = (vaga) => {
        setDadosDemanda({...dadosDemanda, vagas: vaga});
    }

    const [vagaAtual, setVagaAtual] = useState({
        funcao: {
            id: "",
            value: ""
        },
        qtdColaborador: "",
        qtdHora: "",
        valor: ""
    });

    const handleChange = (e, name) => {
        setVagaAtual({ ...vagaAtual, [name]: e.target.value });
    };

    const handleFuncaoVagaChange = (e) => {
        const funcao = funcoesAlocacao.filter(f => f.id === e.target.value)[0];
        setVagaAtual({ ...vagaAtual, funcao: funcao });
    }

    const cadastrarVaga = () => {

        const vagas = dadosDemanda.vagas;

        const novaVaga = {
            id: vagas.length > 0 ? vagas[vagas.length - 1].id + 1 : 0,
            funcao: vagaAtual.funcao,
            qtdColaborador: vagaAtual.qtdColaborador,
            qtdHora: vagaAtual.qtdHora,
            valor: vagaAtual.valor
        }

        const campoVazio = Object.keys(novaVaga).some((key) => {
            return novaVaga[key] === "";
        });

        if (campoVazio) return;
        
        adicionarVaga(novaVaga);

        setVagaAtual({
            funcao: {
                id: "",
                value: ""
            },
            qtdColaborador: "",
            qtdHora: "",
            valor: ""
        });
    }

    return (
        <>
        <Grid mt={4} alignItems={"center"} container flexDirection={"column"} size={{sm: 12, md: 6}}>
            <Typography mb={4} variant="h5" component="h5">Cadastrar Vaga</Typography>
            <FormControl sx={{width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <Picklist size={12} label={"Função"} name={"funcao"} value={vagaAtual.funcao.id} handleChange={handleFuncaoVagaChange} items={funcoesAlocacao} />
                <CampoTexto size={12} handleChange={handleChange} mascara="numeroPositivo" name="qtdColaborador" value={vagaAtual.qtdColaborador} label="Qtd Colaboradores"/>
                <CampoTexto size={12} handleChange={handleChange} mascara="numeroPositivo" name="qtdHora" value={vagaAtual.qtdHora} label="Qtd Horas"/>
                <CampoTexto size={12} handleChange={handleChange} mascara="dinheiro" name="valor" value={vagaAtual.valor} startAdornment="R$" label="Valor"/>
                <Botao sx={{mt: 2}} txt="Inserir Vaga" onClick={cadastrarVaga} />
            </FormControl>
        </Grid>
        <Grid mt={4} size={{sm: 12, md: 6}}>
            <Box sx={{borderColor: theme.palette.paper.dark, p: 2, borderRadius: 4}} border={1}>
                <Typography mb={6} variant="h5" component="h5">Vagas Cadastradas</Typography>
                <PillContainer setPills={setVagas} pills={dadosDemanda.vagas}/>
            </Box>
        </Grid>
        </>
    );
}

export default CadastrarVagas;