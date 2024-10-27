import React, { useEffect, useState } from "react";
import Dialogo from "../../components/dialogo/Dialogo";
import CardEvento from "../../components/card/CardEvento";
import { Box, ButtonBase } from "@mui/material";
import Botao from "../../components/btn/Botao";
import CreateIcon from "@mui/icons-material/Create";
import { useLocation, useNavigate } from "react-router-dom";
import { buscarEventos } from "../../services/EventoService";
import { numToMes } from "../../utils/formatarUtil";
import dayjs from "dayjs";
import defaultimg from "../../assets/evento-card-bg.png";
import MudarVisualizacao from "../../components/mudarVisualizacao/MudarVisualizacao";
import Tabela from "../../components/tabela/Tabela";
import { getEventos } from "../../utils/dataMockUtil";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Eventos = ({ setTitulo, setActions }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const status = queryParams.get("status");

  const columns = [
    {
      field: "nome",
      headerName: "Nome",
      flex: 2,
    },
    {
      field: "inicio",
      headerName: "Início",
      type: "text",
      valueFormatter: (params) => {
        return dayjs(params.value).format("MM/DD/YYYY HH:mm");
      },
      flex: 1,
    },
    {
      field: "fim",
      headerName: "Fim",
      type: "text",
      valueFormatter: (params) => {
        return dayjs(params.value).format("MM/DD/YYYY HH:mm");
      },
      flex: 1,
    },
    {
      field: "logradouro",
      headerName: "Logradouro",
      type: "text",
      flex: 2,
    },
    {
      field: "orcamento",
      headerName: "Orçamento",
      type: "text",
      valueFormatter: (params) => {
        return new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(params);
      },
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Ações",
      headerAlign: "center",
      width: 160,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <span
          style={{
            display: "flex",
            height: "100%",
            justifyContent: "center",
            padding: "6px",
          }}
        >
          <ButtonBase
            key={`view-${params.id}`}
            sx={{ marginRight: 0.5, borderRadius: 2 }}
            onClick={() => navigate(params.id)}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              width={39}
            >
              <VisibilityIcon sx={{ color: "#515151" }} />
            </Box>
          </ButtonBase>
        </span>
      ),
    },
  ];

  const [visualizacao, setVisualizacao] = useState("cards");
  const [filtroStatus, setFiltroStatus] = useState("");
  const [eventos, setEventos] = useState([]);
  const [dataEventos, setDataEventos] = useState([]);

  useEffect(() => {
    setTitulo("Eventos");
  }, [setTitulo]);

  const listarEventos = async () => {
    const data = await buscarEventos();

    setEventos(
      formatarCardEvento(
        data.filter((evento) => evento.status.includes(status || ""))
      )
    );
    console.log(data.filter((evento) => evento.status.includes(status)));

    setDataEventos(
      data
        .filter((evento) => evento.status.includes(status || ""))
        .map((evento) => ({
          ...evento,
          logradouro: evento.endereco.logradouro,
          numero: evento.endereco.numero,
          cidade: evento.endereco.cidade,
          uf: evento.endereco.uf,
        }))
    );
  };

  useEffect(() => {
    listarEventos();
  }, [status]);

  const navigate = useNavigate();
  useEffect(() => {
    const actions = [
      {
        label: "Criar",
        handleClick: () => navigate("/eventos/criar"),
        icon: <CreateIcon />,
      },
    ];

    setActions(actions);
  }, [setActions, navigate]);

  return (
    <Box>
      <MudarVisualizacao
        setVisualizacao={setVisualizacao}
        setFiltroStatus={setFiltroStatus}
        opcoesFiltro={["Não iniciado", "Em andamento", "Finalizado", "Todos"]}
      />
      {visualizacao === "cards" && (
        <Box display={"flex"} flexWrap={"wrap"} gap={2}>
          {eventos &&
            eventos.map((evento, index) => {
              return (
                <CardEvento
                  handleClick={() => navigate(`/eventos/${evento.id}`)}
                  key={index}
                  titulo={evento.evento}
                  date={evento.date}
                  endereco={evento.endereco}
                  url={evento.url}
                />
              );
            })}
          {eventos && eventos.length === 0 && <>Nenhum evento cadastrado</>}
        </Box>
      )}

      {visualizacao === "lista" && (
        <Box sx={{ bgcolor: "#fdfdfd" }}>
          <Tabela columns={columns} rows={dataEventos} />
        </Box>
      )}
    </Box>
  );
};

const formatarCardEvento = (eventos) => {
  const eventosFmt = [];

  eventos.forEach((e) => {
    const date = dayjs(e.fim);
    eventosFmt.push({
      id: e.id,
      evento: e.nome,
      date: {
        dia: date.date(),
        mes: numToMes(date.month()),
      },
      endereco: `${e.endereco.logradouro}, ${e.endereco.numero}`,
      url: e.imagem != null ? e.imagem.url : defaultimg,
    });
  });

  return eventosFmt;
};

export default Eventos;
