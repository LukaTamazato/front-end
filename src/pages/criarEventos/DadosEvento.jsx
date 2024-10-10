import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CampoTexto from "../../components/input/CampoTexto";
import DataHora from "../../components/input/DataHora";
import axios from "axios";

const DadosEvento = ({handleDadosChange, dadosEvento, setDadosEvento}) => {

    const handleTimeChange = (e, name) => {
        setDadosEvento({ ...dadosEvento, [name]: e.format() });
    };

    const handleViaCEP = async (e, name) => {
        handleDadosChange(e, name)
      
        if (e.target.value.length !== 9) return;
        
        const response = await axios.get(`https://viacep.com.br/ws/${e.target.value}/json/`);

        if (response.data.erro) return;

        setDadosEvento((prevDadosEvento) => ({
            ...prevDadosEvento,
            local: response.data.logradouro,
        }));
    };

    return (
        <>
            <Grid display={"flex"} justifyContent={"center"} width="100%" size={12}>
                <Typography mb={2} mt={4} variant="h5" component="h5">Dados do Evento</Typography>
            </Grid>
            <Grid width="90%" margin="auto" container columnSpacing={2}>
                <CampoTexto size={12} handleChange={handleDadosChange} value={dadosEvento.nome} name="nome" label="Nome"/>
                <DataHora handleChange={(e) => handleTimeChange(e, 'inicio')} name="inicio" label="Início"/>
                <DataHora handleChange={(e) => handleTimeChange(e, 'fim')} name="fim" label="Fim"/>
                <CampoTexto handleChange={handleDadosChange} value={dadosEvento.local} name="local" label="Local"/>
                <CampoTexto handleChange={handleViaCEP} value={dadosEvento.cep} regex={/^\d{5}-\d{3}$/} name="cep" label="CEP" mascara="cep"/>
                <CampoTexto handleChange={handleDadosChange} startAdornment="R$" value={dadosEvento.orcamento} mascara="dinheiro" name="orcamento" label="Orçamento"/>
                <CampoTexto handleChange={handleDadosChange} value={dadosEvento.responsavel} name="responsavel" label="Responsável"/>
            </Grid>
        </>
    );
}

export default DadosEvento;