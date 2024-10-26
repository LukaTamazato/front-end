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
import BlockIcon from "@mui/icons-material/Block";
import axios from "axios";
import { fetchData } from "../../../services/DataService";

const CriarEvento = ({ setTitulo, setActions, showToast }) => {
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const labels = ["Evento", "Endereço", "Finalizar"];
  const qtdSteps = labels.length;

  const handleProximo = () => {
    if (step === qtdSteps - 1) handleConcluir();

    if (step > qtdSteps - 2) return;

    setStep(step + 1);
  };

  const handleConcluir = async () => {
    const request = {
      ...dadosEvento,
      idFormulario: dadosEvento.formulario.id,
      idResponsavel: dadosEvento.responsavel.id,
    };

    const formData = new FormData();
    formData.append("img", imagem);

    try {
      const { status } = await postEvento(request, formData);

      if (status !== 201) {
        showToast("Não foi possível criar evento", "error", <BlockIcon />);
        return;
      }

      showToast("Evento criado com sucesso");
      navigate("/eventos");
    } catch (err) {
      showToast("Não foi possível criar evento", "error", <BlockIcon />);
      console.log("Erro ao criar evento: " + err);
    }
  };

  const handleAnterior = () => {
    if (step <= 0) return;

    setStep(step - 1);
  };

  const [dadosEvento, setDadosEvento] = useState({
    nome: "",
    orcamento: "",
    inicio: "",
    fim: "",
    responsavel: {
      id: "",
      nome: "",
    },
    formulario: {
      id: "",
      nome: "",
    },
    endereco: {
      logradouro: "",
      cep: "",
      numero: "",
      uf: "",
      cidade: "",
    },
  });

  //https://app.serenity.com.br/

  const [imagem, setImagem] = useState(null);

  const handleEnderecoChange = (e) => {
    const { name, value } = e.target;
    setDadosEvento((prevState) => ({
      ...prevState,
      endereco: {
        ...prevState.endereco,
        [name]: value,
      },
    }));
  };

  const handleViaCEPResponse = ({ logradouro, uf, cidade }) => {
    setDadosEvento((prevState) => ({
      ...prevState,
      endereco: {
        ...prevState.endereco,
        logradouro: logradouro,
        uf: uf,
        cidade: cidade,
      },
    }));
  };

  const handleUfChange = (event, newValue) => {
    if (newValue) {
      setDadosEvento((prevState) => ({
        ...prevState,
        endereco: {
          ...prevState.endereco,
          uf: newValue.id,
        },
      }));
    }
  };

  const [formularios, setFormularios] = useState([]);

  const buscarFormularios = async () => {
    try {
      const data = await fetchData(`forms`);
      setFormularios(data);
    } catch (err) {
      console.log("Erro ao buscar formulários: " + err);
      // showToast("Erro ao buscar formulários", "error", <BlockIcon/>)
    }
  };

  const [responsaveis, setResponsaveis] = useState([]);

  useEffect(() => {
    const buscarResponsaveis = async () => {
      try {
        const data = await fetchData(`usuarios`);
        setResponsaveis(
          data
            .filter((user) => user.contato !== null)
            .map((user) => ({ ...user.contato, id: user.id }))
        );
      } catch (err) {
        console.log("Erro ao buscar evento: " + err);
        // showToast("Erro ao buscar evento", "error", <BlockIcon/>)
      }
    };
    buscarFormularios();
    buscarResponsaveis();
  }, []);

  const handleFormularioChange = (e) => {
    const formulario = formularios.find((f) => f.id === e.target.value);

    if (!formulario) {
      return;
    }

    setDadosEvento((prevState) => ({
      ...prevState,
      formulario: formulario,
    }));
  };

  const handleResponsavelChange = (e) => {
    const responsavel = responsaveis.find((f) => f.id === e.target.value);

    if (!responsavel) {
      return;
    }

    setDadosEvento((prevState) => ({
      ...prevState,
      responsavel: responsavel,
    }));
  };

  const handleDadosChange = (e, name) => {
    setDadosEvento({ ...dadosEvento, [name]: e.target.value });
  };

  useEffect(() => {
    setTitulo("");
    setActions(null);
  });

  return (
    <>
      <PageModal>
        <Typography variant="h4" component="h4">
          Criar Evento
        </Typography>
        <Box sx={{ mt: 1, mb: 3 }}>
          <Grid container width="80%" margin="auto" columnSpacing={10}>
            <Grid display={"flex"} justifyContent={"center"} size={12}>
              <Esteira setStep={setStep} step={step} labels={labels} />
            </Grid>
            {step === 0 && (
              <DadosEvento
                formularios={formularios}
                responsaveis={responsaveis}
                imagem={imagem}
                setImagem={setImagem}
                showToast={showToast}
                handleFormularioChange={handleFormularioChange}
                handleResponsavelChange={handleResponsavelChange}
                handleDadosChange={handleDadosChange}
                dadosEvento={dadosEvento}
                setDadosEvento={setDadosEvento}
              />
            )}

            {step === 1 && (
              <EventoEndereco
                handleViaCEPResponse={handleViaCEPResponse}
                dadosEvento={dadosEvento}
                handleEnderecoChange={handleEnderecoChange}
                handleUfChange={handleUfChange}
              />
            )}

            {step === 2 && <Finalizar dadosEvento={dadosEvento} />}

            {step === 3 && (
              <AbrirInscricoes
                showToast={showToast}
                dadosEvento={dadosEvento}
              />
            )}
          </Grid>
        </Box>
        <Box
          sx={{
            mt: "auto",
            alignSelf: "center",
            display: "flex",
            gap: 1,
            width: "40%",
          }}
        >
          <Botao
            onClick={step > 0 ? handleAnterior : () => navigate(-1)}
            sx={{ width: "100%", minWidth: 100 }}
            variant={step > 0 ? "outlined" : "contained"}
            color="primary"
            txt={step > 0 ? "Anterior" : "Cancelar"}
          />
          <Botao
            onClick={handleProximo}
            sx={{ width: "100%", minWidth: 100 }}
            txt={step < qtdSteps - 1 ? "Próximo" : "Concluir"}
          />
        </Box>
      </PageModal>
    </>
  );
};

export default CriarEvento;
