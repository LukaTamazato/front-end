import { useEffect, useState } from "react";
import PageModal from "../../components/pageModal/PageModal";
import Imagem from "../../components/imagem/Imagem";
import { fetchData } from "../../services/DataService";
import { useNavigate, useParams } from "react-router-dom";
import BlockIcon from '@mui/icons-material/Block';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Button, ButtonBase, CardMedia, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import DeleteIcon from '@mui/icons-material/Delete';
import img from "../../assets/evento-card-bg.png"
import EditIcon from '@mui/icons-material/Edit';
import { useTheme } from "@emotion/react";
import { aplicarMascara } from "../../utils/formatarUtil";
import dayjs from "dayjs";
import OutlinedBox from "../../components/box/OutlinedBox";
import Mapa from "../../mapa/Mapa";
import CampoRegistro from "../../components/input/CampoRegistro";
import Tabela from "../../components/tabela/Tabela";
import { getDemandas } from "../../utils/dataMockUtil";
import VisibilityIcon from "@mui/icons-material/Visibility";

const RegistroEvento = ({setTitulo, setActions, showToast, toggleDialog, setDialogContent, setDialogAction}) => {

    useEffect(() => {
        setTitulo('');
        setActions(null);
    }, [])

    const { eventId } = useParams();
    const navigate = useNavigate();

    const [evento, setEvento] = useState(null);
    const [loading, setLoading] = useState(true);

    const guias = ['Local', 'Demandas', 'Vagas'];
    const [guia, setGuia] = useState(guias[0]);

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
                  onClick={() => console.log(params.id)}
                >
                  <Box display={"flex"} alignItems={"center"} justifyContent={"center"} width={39}>
                    <VisibilityIcon sx={{color: "#515151"}} />
                  </Box>
                </ButtonBase>
                <ButtonBase 
                  key={`edit-${params.id}`}
                  sx={{ borderRadius: 2 }}
                  onClick={() => console.log(params.id)}
                >
                  <Box display={"flex"} alignItems={"center"} justifyContent={"center"} width={39}>
                    <EditIcon sx={{color: "#515151"}} />
                  </Box>
                </ButtonBase>
              </span>
            ),
          },
    ]

    useEffect(() => {
        const buscarEvento = async () => {
            try {
                const data = await fetchData(`eventos/${eventId}`);
                setEvento(data);
                console.log(data)
            } catch (err) {
                console.log("Erro ao buscar evento: " + err);
                showToast("Erro ao buscar evento", "error", <BlockIcon/>)
            }
        }

        buscarEvento();
    }, [])

    useEffect(() => {

        if (!evento) return;

        setDialogContent({
            title: "Deseja excluir?",
            body: <>O evento <b>{evento.nome}</b> será excluido permanentemente</>
        });
        setDialogAction(() => () => {console.log('Evento ' + evento.id + ' excluído.')});
    }, [evento, setDialogContent, setDialogAction])

    const theme = useTheme();

    return (
        <PageModal>
            <Box mb={1} className="flexRowBetween">
                <Box className="flexRowCenter" gap={1}>
                    <ButtonBase onClick={() => navigate(-1)} disableRipple sx={{borderRadius: "50%", p: "8px"}}>
                        <ArrowBackIosIcon fontSize="32px"/>
                    </ButtonBase>
                    <Typography variant="h6">Evento</Typography>
                </Box>
            </Box>
            {evento && 
                <>
                    <Box mb={3} p={1} className="flexRowBetween" sx={{alignItems: 'flex-end'}}>
                    <Box className="flexRowCenter">
                        <Typography variant="h5">{evento.nome}</Typography>
                    </Box>
                    <Box className="flexRowStart" sx={{gap: 10}}>
                        <Box className="flexColumnStart">
                            <Typography variant="subtitle1">Status</Typography>
                            <Typography variant="h6">Aberto</Typography>
                        </Box>

                        <Box className="flexColumnStart">
                            <Typography variant="subtitle1">Orçamento</Typography>
                            <Typography variant="h6">R$ {aplicarMascara(evento.orcamento, 'dinheiro')}</Typography>
                        </Box>

                        <Box className="flexColumnStart">
                            <Typography variant="subtitle1">Data do evento</Typography>
                            <Typography variant="h6">{dayjs(evento.inicio).format('DD/MM/YYYY HH:mm')}</Typography>
                        </Box>

                        <Box className="flexColumnStart">
                            <Typography variant="subtitle1">Responsável</Typography>
                            <Typography variant="h6">Antunes</Typography>
                        </Box>

                    </Box>
                    <Box className="flexRowCenter" gap={1}>
                        <Button variant="contained" color="secondary" startIcon={<EditIcon/>} onClick={() => console.log('Editar ' + evento.id)}>Editar</Button>
                        <Button variant="outlined" startIcon={<DeleteIcon/>} onClick={toggleDialog}>Excluir</Button>
                    </Box>
                    </Box>
                    <Divider/>
                    <Box className="flexRowStart">
                        <Imagem imagem={evento.imagem} placeholder={img}/>
                    </Box>
                    <Guias guiaAtual={guia} guias={guias} setGuia={setGuia}/>

                    <OutlinedBox sx={{mt: 3}}>
                    { guia === guias[0] && 
                        <Box className="flexRowBetween" width="100%" margin="auto">
                            <Grid container rowGap={3} columnSpacing={2} sx={{width: '70%', margin: 'auto'}}>
                                <CampoRegistro label="Logradouro" value={evento.logradouro} />
                                <CampoRegistro label="Número" value={evento.numero} />
                                <CampoRegistro label="CEP" value={evento.cep} />
                                <CampoRegistro label="Cidade" value={evento.cidade} />
                                <CampoRegistro label="Estado" value={evento.uf} />
                            </Grid>
                            <Box>
                                <Mapa logradouro={evento.logradouro} cidade={evento.cidade} uf={evento.uf} popup={evento.nome} />
                            </Box>
                        </Box>
                    }
                    { guia === guias[1] && 
                        <>
                        <Tabela columns={columns} rows={getDemandas}/>
                        </>
                    }
                    { guia === guias[2] && 
                        <>
                        c
                        </>
                    }
                    </OutlinedBox>
                </>
            }
        </PageModal>
    );
}

const Guias = ({guias, guiaAtual, setGuia}) => {

    const theme = useTheme();

    return (
        <Box mt={2} sx={{display: 'grid', gridTemplateColumns: `repeat(${guias.length}, 1fr)`, width: '30%'}} gap={5}>
            { guias && 
                guias.map((item, index) => {
                    return (
                        <ButtonBase 
                            disableRipple 
                            onClick={() => setGuia(item)} 
                            sx={{borderBottom: `2px solid ${guiaAtual === item ? theme.palette.secondary.main : null}`, pb: '4px'}} 
                            key={index}>
                                <Typography>{item}</Typography>
                        </ButtonBase>
                    );
                })
            }
        </Box>
    )
}

export default RegistroEvento;