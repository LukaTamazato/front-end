import React, { useEffect, useState } from "react";
import PageModal from "../components/pageModal/PageModal";
import { Box, FormControl, Typography } from "@mui/material";
import CampoTexto from "../components/input/CampoTexto";
import Botao from "../components/btn/Botao";
import Grid from "@mui/material/Grid2";
import Esteira from "../components/esteira/Esteira";
import PillContainer from "../components/pill/Pill";
import Picklist from "../components/input/Picklist";
import { funcoesAlocacao } from "../utils/dataMockUtil";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DataHora from "../components/input/DataHora";



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

    const [vagas, setVagas] = useState([
        {
            "id": 0,
            "funcao": "Atendente",
            "quantidade": 40
        },
        {
            "id": 1,
            "funcao": "Encarregado",
            "quantidade": 8
        },
        {
            "id": 2,
            "funcao": "Dosador",
            "quantidade": 18
        }
    ]);

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

    const [vagaAtual, setVagaAtual] = useState({
        funcao: "",
        quantidade: ""
    });

    const handleChange = (e, name) => {
        setVagaAtual({ ...vagaAtual, [name]: e.target.value });
    };

    const [dadosEvento, setDadosEvento] = useState({
        nome: "",
        orcamento: "",
        inicio: null,
        fim: null,
        local: "",
        cep: "",
        responsavel: ""
    });

    const handleDadosChange = (e, name) => {
        setDadosEvento({ ...dadosEvento, [name]: e.target.value });
    };

    const handleTimeChange = (e, name) => {
        setDadosEvento({ ...dadosEvento, [name]: e.format() });
    };

    useEffect(() => {
        setTitulo("");
        setActions(null);
    })

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
                                <>
                                <Grid display={"flex"} justifyContent={"center"} width="100%" size={12}>
                                    <Typography mb={2} mt={1} variant="h5" component="h5">Dados do Evento</Typography>
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
                            ))}

                            {(step === 1 && (
                                <>
                                <Grid mt={4} alignItems={"center"} container flexDirection={"column"} size={{sm: 12, md: 6}}>
                                    <Typography mb={6} variant="h5" component="h5">Cadastrar Vaga</Typography>
                                    <FormControl sx={{width: '70%', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                                        <Picklist name={"funcao"} value={vagaAtual.funcao} handleChange={handleChange} items={funcoesAlocacao} />
                                        <CampoTexto size={12} handleChange={handleChange} mascara="numeroPositivo" name="quantidade" value={vagaAtual.quantidade} label="Qtd Colaboradores"/>
                                        <CampoTexto size={12} label="Qtd Horas"/>
                                        <CampoTexto size={12} label="Valor"/>
                                        <Botao sx={{mt: 2}} txt="Inserir Vaga" onClick={() => {cadastrarVaga()}} />
                                    </FormControl>
                                </Grid>
                                <Grid mt={4} size={{sm: 12, md: 6}}>
                                    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                                        {(step === 1 && 
                                        <>
                                        <Typography mb={6} variant="h5" component="h5">Vagas Cadastradas</Typography>
                                        <PillContainer setVagas={setVagas} pills={vagas}/>
                                        </>
                                        )}
                                    </Box>
                                </Grid>
                                </>
                            ))}

                            {(step === 2 && (
                                <Typography>c</Typography>
                            ))}
                            
                            {(step === 3 && (
                                <Typography>d</Typography>
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