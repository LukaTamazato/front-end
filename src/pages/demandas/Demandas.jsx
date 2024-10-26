import React, { useEffect, useState } from "react";
import Dialogo from "../../components/dialogo/Dialogo";
import CardDemanda from "../../components/card/CardDemanda";
import { Box, ButtonBase } from "@mui/material";
import Botao from "../../components/btn/Botao";
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from "react-router-dom";
import { buscarDemandas } from "../../services/DemandaService";
import { formatarCardDemanda } from "../../utils/formatarUtil";
import { getDemandas } from "../../utils/dataMockUtil";
import MudarVisualizacao from "../../components/mudarVisualizacao/MudarVisualizacao";
import EditIcon from "@mui/icons-material/Edit";
import Tabela from "../../components/tabela/Tabela";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Demandas = ({setTitulo, setActions}) => {

    useEffect(() => {
        setTitulo("Demandas");
        // listarDemandas();
        // setDemandas(formatarCardDemanda(getDemandas));
        listarDemandas();
    },[])

    const listarDemandas = async () => {
        const demandas = await buscarDemandas();
        setDemandas(formatarCardDemanda(demandas));
    }

    const handleEditClick = (id) => {
        console.log(id);
      };
      
    const handleViewClick = (id) => {
        console.log(id);
    };

    const [visualizacao, setVisualizacao] = useState('cards');

    const columns = [
        {
          field: "nome",
          headerName: "Nome",
          flex: 2,
        },
        {
          field: "inicio",
          headerName: "Inicio",
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
          field: "evento",
          headerName: "Evento",
          type: "text",
          flex: 2,
        },
        {
          field: "tipoContrato",
          headerName: "Tipo Contrato",
          type: "text",
          flex: 1.5,
        },
        {
          field: "custoTotal",
          headerName: "Custo Total",
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

    const navigate = useNavigate();
    useEffect(() => {
        const actions = [
            {label: "Criar", handleClick: (() => navigate('/demandas/criar')), icon: (<CreateIcon/>)}
        ]

        setActions(actions);
    }, [setActions, navigate])

    const [demandas, setDemandas] = useState([]);

    return (
        <Box>
            <MudarVisualizacao setVisualizacao={setVisualizacao} opcoesFiltro={['Abertas', 'Fechadas', 'Totais']}/>
            { visualizacao === 'cards' &&
                <Box display={"flex"} flexWrap={"wrap"} gap={2}>
                    {(demandas && demandas.map((demanda, index) => {
                        return (
                            <CardDemanda key={index} titulo={demanda.demanda} date={demanda.date} evento={demanda.evento} />
                        );
                    }))}
                </Box>
            }
            { visualizacao === 'lista' &&
                <Tabela columns={columns} rows={getDemandas}/>
            }
        </Box>
    )
}

export default Demandas;