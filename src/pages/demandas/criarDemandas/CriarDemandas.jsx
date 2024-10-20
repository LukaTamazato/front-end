import { useEffect, useState } from "react";
import PageModal from "../../../components/pageModal/PageModal";
import { Box, Typography } from "@mui/material";
import Botao from "../../../components/btn/Botao";
import Grid from "@mui/material/Grid2";
import Esteira from "../../../components/esteira/Esteira";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import DadosDemanda from "./DadosDemanda";
import CadastrarVagas from "./CadastrarVagas";
import TipoContrato from "./TipoContrato";
import Finalizar from "./Finalizar";
import { eventos } from "../../../utils/dataMockUtil";

const CriarDemandas = ({setTitulo, setActions}) => {

    const navigate = useNavigate();

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const eventId = queryParams.get('eventId');

    const [step, setStep] = useState(0);
    const labels = ['Demanda', 'Vagas', 'Contrato', 'Finalizar'];
    const qtdSteps = labels.length;

    const handleProximo = () => {
        
        if (step === qtdSteps-1) handleConcluir();

        if (step > (qtdSteps-2)) return;

        setStep(step + 1);
    }

    const handleConcluir = () => {
        navigate('/demandas-abertas');

        console.log(dadosDemanda);
    }
    
    const handleAnterior = () => {
        if (step <= 0) return;

        setStep(step - 1);
    }

    const [dadosDemanda, setDadosDemanda] = useState({
        nome: "",
        inicio: "",
        fim: "",
        custoTotal: 0,
        responsavel: "",
        tipoContrato: {
            id: "",
            value: "",
            documentosObrigatorios: []
        },
        documentosAdicionados: [],
        evento: {
            id: "",
            value: ""
        },
        vagas: []
    });

    const adicionarVaga = (novaVaga) => {
        setDadosDemanda((prevState) => ({
            ...prevState,
            vagas: [...prevState.vagas, novaVaga]
        }));
    };

    const handleDadosChange = (e, name) => {
        setDadosDemanda({ ...dadosDemanda, [name]: e.target.value });
    };

    useEffect(() => {
        setTitulo("");
        setActions(null);
    })

    useEffect(() => {
        if (!eventId) return;
        
        setDadosDemanda(prevState => ({ ...prevState, evento: eventos.find(evento => evento.id === eventId) }));
      }, [eventId]);

    return (
        <>
            <PageModal>
                <Typography variant="h4" component="h4">
                    Criar Demanda
                </Typography>
                <Box sx={{mt: 1}}>
                    <Grid container width="80%" margin="auto" columnSpacing={10}>
                        <Grid display={"flex"} justifyContent={"center"} size={12}>
                            <Esteira setStep={setStep} step={step} labels={labels} />
                        </Grid>
                            {(step === 0 && (
                                <DadosDemanda hasParams={eventId != null} handleDadosChange={handleDadosChange} dadosDemanda={dadosDemanda} setDadosDemanda={setDadosDemanda}/>
                            ))}

                            {(step === 1 && (
                                <CadastrarVagas setDadosDemanda={setDadosDemanda} dadosDemanda={dadosDemanda} adicionarVaga={adicionarVaga}/>
                            ))}

                            {(step === 2 && (
                                <TipoContrato dadosDemanda={dadosDemanda} handleDadosChange={handleDadosChange}/>
                            ))}

                            {(step === 3 && (
                                <Finalizar dadosDemanda={dadosDemanda} setDadosDemanda={setDadosDemanda}/>
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

export default CriarDemandas;