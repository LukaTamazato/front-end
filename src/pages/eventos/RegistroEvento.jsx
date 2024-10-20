import { useEffect, useState } from "react";
import PageModal from "../../components/pageModal/PageModal";
import { fetchData } from "../../services/DataService";
import { useNavigate, useParams } from "react-router-dom";
import BlockIcon from '@mui/icons-material/Block';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Button, ButtonBase, Divider, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const RegistroEvento = ({setTitulo, setActions, showToast, toggleDialog, setDialogContent, setDialogAction}) => {

    useEffect(() => {
        setTitulo('');
        setActions(null);
    }, [])

    const { eventId } = useParams();
    const navigate = useNavigate();

    const [evento, setEvento] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const buscarEvento = async () => {
            try {
                const data = await fetchData(`eventos/${eventId}`);
                setEvento(data);
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
                    <Box mb={3} p={1} className="flexRowBetween">
                        <Typography variant="h5">{evento.nome}</Typography>
                            <Box className="flexRowCenter" gap={1}>
                                <Button variant="contained" color="secondary" startIcon={<EditIcon/>} onClick={() => console.log('Editar ' + evento.id)}>Editar</Button>
                                <Button variant="outlined" startIcon={<DeleteIcon/>} onClick={toggleDialog}>Excluir</Button>
                            </Box>
                    </Box>
                    <Divider/>
                </>
            }
        </PageModal>
    );
}

export default RegistroEvento;