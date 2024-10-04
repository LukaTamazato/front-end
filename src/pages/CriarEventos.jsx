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



const CriarEventos = ({setTitulo}) => {

    const [fase, setFase] = useState(0);
    const qtdFases = 4;

    const handleProximo = () => {
        if (fase > (qtdFases-2)) return;

        setFase(fase + 1);
    }
    
    const handleAnterior = () => {
        if (fase <= 0) return;

        setFase(fase - 1);
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

    useEffect(() => {
        setTitulo("");
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
                            <Esteira setFase={setFase} fase={fase} qtdFases={qtdFases} />
                        </Grid>
                        <Grid alignItems={"center"} container flexDirection={"column"} size={{sm: 12, md: 6}}>
                            {(fase === 0 && <Typography>b</Typography>)}
                            {(fase === 1 && (
                                <>
                                <Typography mb={6} variant="h5" component="h5">Cadastrar Vaga</Typography>
                                <FormControl sx={{width: '70%', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                                <Picklist name={"funcao"} value={vagaAtual.funcao} handleChange={handleChange} items={funcoesAlocacao} />
                                <CampoTexto size={12} handleChange={handleChange} mascara="numeroPositivo" name="quantidade" value={vagaAtual.quantidade} label="Qtd Colaboradores"/>
                                <CampoTexto size={12} label="Qtd Horas"/>
                                <CampoTexto size={12} label="Valor"/>
                                <Botao sx={{mt: 2}} txt="Inserir Vaga" onClick={() => {cadastrarVaga()}} />
                                </FormControl>
                                </>
                            ))}
                            {(fase === 2 && <Typography>c</Typography>)}
                            {(fase === 3 && <Typography>d</Typography>)}
                        </Grid>
                        <Grid size={{sm: 12, md: 6}}>
                            <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                                {(fase === 1 && 
                                <>
                                <Typography mb={6} variant="h5" component="h5">Vagas Cadastradas</Typography>
                                <PillContainer setVagas={setVagas} pills={vagas}/>
                                </>
                                )}
                                
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{mt: "auto", alignSelf: "center", display: "flex", gap: 1, width: "40%"}} >
                    <Botao onClick={handleAnterior} sx={{width: "100%", minWidth: 100}} variant={fase > 0 ? "outlined" : "contained"} color="primary" txt={fase > 0 ? "Anterior" : "Cancelar"} />
                    <Botao onClick={handleProximo} sx={{width: "100%", minWidth: 100}} txt={fase < qtdFases-1 ? "Próximo" : "Concluir"} />
                </Box>
            </PageModal>
        </>
    )
}

export default CriarEventos;