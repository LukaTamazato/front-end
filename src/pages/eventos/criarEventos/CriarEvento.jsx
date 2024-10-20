import { useEffect, useState } from "react";
import Esteira from "../../../components/esteira/Esteira";
import Grid from "@mui/material/Grid2";
import PageModal from "../../../components/pageModal/PageModal";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Botao from "../../../components/btn/Botao";
import DadosEvento from "./DadosEvento";
import EventoEndereco from "./EventoEndereco";
import AbrirInscricoes from "./AbrirInscricoes";
import Finalizar from "./Finalizar";
import { getFormularios } from "../../../utils/dataMockUtil";
import { postEvento } from "../../../services/EventoService";
import BlockIcon from '@mui/icons-material/Block';
import axios from "axios";

const CriarEvento = ({setTitulo, setActions, showToast}) => {
    const navigate = useNavigate();

    const [step, setStep] = useState(0);
    const labels = ['Evento', 'Endereço', 'Finalizar'];
    const qtdSteps = labels.length;

    const handleProximo = () => {
        
        if (step === qtdSteps-1) handleConcluir();

        if (step > (qtdSteps-2)) return;

        setStep(step + 1);
    }

    const handleConcluir = async () => {

        const request = {...dadosEvento};

        request.orcamento = request.orcamento.replaceAll('.','').replaceAll(',','.');

        // TODO: trazer idFormulario dinamicamente
        request.idFormulario = '53f71c74-a2c0-41bc-b712-980f6d90bff0';

        const formData = new FormData();
        formData.append('img', imagem);
        
        try {
            const response = await postEvento(request, formData);

            showToast("Evento criado com sucesso");
            navigate('/eventos');
        } catch (err) {
            showToast("Não foi possível criar evento", "error", <BlockIcon/>);
            console.log('Erro ao criar evento: ' + err);
        }
    }
    
    const handleAnterior = () => {
        if (step <= 0) return;

        setStep(step - 1);
    }

    const [dadosEvento, setDadosEvento] = useState({
        nome: "",
        orcamento: "",
        inicio: "",
        fim: "",
        idResponsavel: "",
        idFormulario: "",
        endereco: {
            logradouro: "",
            cep: "",
            numero: "",
            uf: "",
            cidade: ""
        }
    });

    //https://app.serenity.com.br/

    const [imagem, setImagem] = useState(null);

    const handleEnderecoChange = (e) => {
        const { name, value } = e.target;
        setDadosEvento((prevState) => ({
          ...prevState,
          endereco: {
                ...prevState.endereco,
                [name]: value
            }
        }));
    };

    const handleViaCEPResponse = ({logradouro, uf, cidade}) => {
        setDadosEvento((prevState) => ({
            ...prevState,
            endereco: {
                  ...prevState.endereco,
                  logradouro: logradouro,
                  uf: uf,
                  cidade: cidade
              }
          }));
    }
    
      
    const handleUfChange = (event, newValue) => {
        if (newValue) {
            setDadosEvento((prevState) => ({
                ...prevState,
                endereco: {
                    ...prevState.endereco,
                    uf: newValue.id
                }
            }));
        }
    };

    const handleFormularioChange = (e) => {
        const formulario = getFormularios.find(f => f.id === e.target.value);
        setDadosEvento((prevState) => ({
            ...prevState,
            idFormulario: formulario.id
        }));
    }

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
                <Box sx={{mt: 1, mb: 3}}>
                    <Grid container width="80%" margin="auto" columnSpacing={10}>
                        <Grid display={"flex"} justifyContent={"center"} size={12}>
                            <Esteira setStep={setStep} step={step} labels={labels} />
                        </Grid>
                            {(step === 0 && (
                                <DadosEvento imagem={imagem} setImagem={setImagem} showToast={showToast} handleFormularioChange={handleFormularioChange} handleDadosChange={handleDadosChange} dadosEvento={dadosEvento} setDadosEvento={setDadosEvento}/>
                            ))}

                            {(step === 1 && (
                                <EventoEndereco handleViaCEPResponse={handleViaCEPResponse} dadosEvento={dadosEvento} handleEnderecoChange={handleEnderecoChange} handleUfChange={handleUfChange}/>
                            ))}

                            {(step === 2 && (
                                <Finalizar dadosEvento={dadosEvento}/>
                            ))}

                            {(step === 3 && (
                                <AbrirInscricoes showToast={showToast} dadosEvento={dadosEvento}/>
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

export default CriarEvento;