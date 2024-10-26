import React, { useEffect, useState } from "react";
import Dialogo from "../../components/dialogo/Dialogo";
import CardEvento from "../../components/card/CardEvento";
import { Box, ButtonBase } from "@mui/material";
import Botao from "../../components/btn/Botao";
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from "react-router-dom";
import { buscarEventos } from "../../services/EventoService";
import { numToMes } from "../../utils/formatarUtil";
import dayjs from "dayjs";
import defaultimg from "../../assets/evento-card-bg.png"
import MudarVisualizacao from "../../components/mudarVisualizacao/MudarVisualizacao";
import Tabela from "../../components/tabela/Tabela";
import { getEventos } from "../../utils/dataMockUtil";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Eventos = ({setTitulo, setActions}) => {

    const handleEditClick = (id) => {
        console.log(id);
      };
      
      const handleViewClick = (id) => {
        console.log(id);
      };

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
          flex: 1,
        },
        {
          field: "fim",
          headerName: "Fim",
          type: "text",
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
              <span style={{display: "flex", height: "100%", justifyContent: "center", padding: "6px"}}>
                <ButtonBase
                  key={`view-${params.id}`}
                  sx={{ marginRight: 0.5, borderRadius: 2 }}
                  onClick={() => handleViewClick(params.id)}
                >
                  <Box display={"flex"} alignItems={"center"} justifyContent={"center"} width={39}>
                    <VisibilityIcon sx={{color: "#515151"}} />
                  </Box>
                </ButtonBase>
                <ButtonBase 
                  key={`edit-${params.id}`}
                  sx={{ borderRadius: 2 }}
                  onClick={() => handleEditClick(params.id)}
                >
                  <Box display={"flex"} alignItems={"center"} justifyContent={"center"} width={39}>
                    <EditIcon sx={{color: "#515151"}} />
                  </Box>
                </ButtonBase>
              </span>
            ),
          },
    ]

    // useEffect(() => {
    //     setTitulo("Eventos");
    //     listarEventos();
    // },[])

    const [visualizacao, setVisualizacao] = useState('cards');
    const [ filtroStatus, setFiltroStatus] = useState('')
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
      setTitulo("Eventos");
      const listarEventos = async () => {
          const eventosa = await buscarEventos();

          setEventos(formatarCardEvento(eventosa.filter(evento => evento.status.includes(filtroStatus))));
      }
      listarEventos();
    }, [filtroStatus, eventos, setTitulo])

    const navigate = useNavigate();
    useEffect(() => {
        const actions = [
            {label: "Criar", handleClick: (() => navigate('/eventos/criar')), icon: (<CreateIcon/>)}
        ]

        setActions(actions);
    }, [setActions, navigate])

    return (
        <Box>
            <MudarVisualizacao setVisualizacao={setVisualizacao} setFiltroStatus={setFiltroStatus} opcoesFiltro={['Não iniciado', 'Em andamento', 'Finalizado', 'Todos']}/>
        { visualizacao === 'cards' &&
            <Box display={"flex"} flexWrap={"wrap"} gap={2}>
                {(eventos && eventos.map((evento, index) => {
                    return (
                        <CardEvento handleClick={() => navigate(`/eventos/${evento.id}`)} key={index} titulo={evento.evento} date={evento.date} endereco={evento.endereco} url={evento.url} />
                    );
                }))}
                {eventos && eventos.length === 0 && <>Nenhum evento cadastrado</>}
            </Box>
        }

        { visualizacao === 'lista' &&
            <Tabela columns={columns} rows={getEventos}/>
        }
        </Box>
    )
}

const formatarCardEvento = (eventos) => {
    const eventosFmt = [];

    eventos.forEach((e) => {
        const date = dayjs(e.fim);
        eventosFmt.push({
            id: e.id,
            evento: e.nome,
            date: {
                dia: date.date(),
                mes: numToMes(date.month())
            },
            endereco: `${e.endereco.logradouro}, ${e.endereco.numero}`,
            url: e.imagem != null ? e.imagem.url : defaultimg
        })
    })

    return eventosFmt;
}

export default Eventos;