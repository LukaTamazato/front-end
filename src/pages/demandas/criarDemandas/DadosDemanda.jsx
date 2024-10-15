import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CampoTexto from "../../../components/input/CampoTexto";
import DataHora from "../../../components/input/DataHora";
import axios from "axios";

const DadosDemanda = ({handleDadosChange, dadosDemanda, setDadosDemanda}) => {

    const handleTimeChange = (e, name) => {
        setDadosDemanda({ ...dadosDemanda, [name]: e.format() });
    };

    const handleViaCEP = async (e, name) => {
        handleDadosChange(e, name)
      
        if (e.target.value.length !== 9) return;
        
        const response = await axios.get(`https://viacep.com.br/ws/${e.target.value}/json/`);

        if (response.data.erro) return;

        setDadosDemanda((prevDadosDemanda) => ({
            ...prevDadosDemanda,
            local: response.data.logradouro,
        }));
    };

    return (
        <>
            <Grid display={"flex"} justifyContent={"center"} width="100%" size={12}>
                <Typography mb={2} mt={4} variant="h5" component="h5">Dados da Demanda</Typography>
            </Grid>
            <Grid width="90%" margin="auto" container columnSpacing={2}>
                <CampoTexto size={12} handleChange={handleDadosChange} value={dadosDemanda.nome} name="nome" label="Nome"/>
                <DataHora handleChange={(e) => handleTimeChange(e, 'inicio')} name="inicio" label="Início"/>
                <DataHora handleChange={(e) => handleTimeChange(e, 'fim')} name="fim" label="Fim"/>
                <CampoTexto handleChange={handleDadosChange} value={dadosDemanda.local} name="local" label="Local"/>
                <CampoTexto handleChange={handleViaCEP} value={dadosDemanda.cep} regex={/^\d{5}-\d{3}$/} name="cep" label="CEP" mascara="cep"/>
                <CampoTexto handleChange={handleDadosChange} startAdornment="R$" value={dadosDemanda.orcamento} mascara="dinheiro" name="orcamento" label="Orçamento"/>
                <CampoTexto handleChange={handleDadosChange} value={dadosDemanda.responsavel} name="responsavel" label="Responsável"/>
            </Grid>
        </>
    );
}

export default DadosDemanda;