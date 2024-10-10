import { useEffect, useState } from "react";
import PageModal from "../../components/pageModal/PageModal";
import { Box, Typography } from "@mui/material";
import Botao from "../../components/btn/Botao";
import Grid from "@mui/material/Grid2";
import Esteira from "../../components/esteira/Esteira";
import { useNavigate } from "react-router-dom";
import DadosEvento from "./DadosEvento";
import CadastrarVagas from "./CadastrarVagas";
import DadosCadastrais from "./DadosCadastrais";
import AbrirInscricoes from "./Abrir Inscrições";

const CriarEventos = ({setTitulo, setActions}) => {

    const navigate = useNavigate();

    const [step, setStep] = useState(0);
    const labels = ['Evento', 'Vagas', 'Colaborador', 'Inscrições'];
    const qtdSteps = labels.length;

    const handleProximo = () => {
        if (step > (qtdSteps-2)) return;

        setStep(step + 1);
    }
    
    const handleAnterior = () => {
        if (step <= 0) return;

        setStep(step - 1);
    }

    const [dadosEvento, setDadosEvento] = useState({
        nome: "",
        orcamento: "",
        inicio: null,
        fim: null,
        local: "",
        cep: "",
        responsavel: "",
        tipoContrato: "",
        url: "https://www.serenity.com.br/eventos/ed2ab348-23d5-4d05-8553-96bcfec1a087"
    });

    const [vagas, setVagas] = useState([]);

    const handleDadosChange = (e, name) => {
        setDadosEvento({ ...dadosEvento, [name]: e.target.value });
    };

    useEffect(() => {
        setTitulo("");
        setActions(null);
    })

    return (
        <>
            <PageModal>
                <Typography variant="h4" component="h4">
                    Criar Evento
                </Typography>
                <Box sx={{mt: 1}}>
                    <Grid container>
                        <Grid display={"flex"} justifyContent={"center"} size={12}>
                            <Esteira setStep={setStep} step={step} labels={labels} />
                        </Grid>
                            {(step === 0 && (
                                <DadosEvento handleDadosChange={handleDadosChange} dadosEvento={dadosEvento} setDadosEvento={setDadosEvento}/>
                            ))}

                            {(step === 1 && (
                                <CadastrarVagas vagas={vagas} setVagas={setVagas}/>
                            ))}

                            {(step === 2 && (
                                <DadosCadastrais dadosEvento={dadosEvento} handleDadosChange={handleDadosChange}/>
                            ))}
                            
                            {(step === 3 && (
                                <AbrirInscricoes dadosEvento={dadosEvento}/>
                            ))}
                    </Grid>
                </Box>
                <Box sx={{mt: "auto", alignSelf: "center", display: "flex", gap: 1, width: "40%"}} >
                    <Botao onClick={step > 0 ? handleAnterior : (() => navigate(-1))} sx={{width: "100%", minWidth: 100}} variant={step > 0 ? "outlined" : "contained"} color="primary" txt={step > 0 ? "Anterior" : "Cancelar"} />
                    <Botao onClick={handleProximo} sx={{width: "100%", minWidth: 100}} txt={step < qtdSteps-1 ? "Próximo" : "Concluir"} />
                </Box>
            </PageModal>
        </>
    )
}

export default CriarEventos;