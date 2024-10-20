import { useEffect, useState } from "react";
import { Box, Button, ButtonGroup, Card, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Snackbar, TextField, Tooltip, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import CreateIcon from '@mui/icons-material/Create';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { getFormularios } from "../utils/dataMockUtil";
import Botao from "../components/btn/Botao";
import { useNavigate } from "react-router-dom";

const Formularios = ({setTitulo, setActions, showToast}) => {
    const theme = useTheme();

    useEffect(() => {
        setTitulo("Formulários");
        setFormularios(getFormularios);
    }, []);

    const [formularios, setFormularios] = useState([]);


    const [editarDialogOpen, setEditarDialogOpen] = useState(false);
    const [formulario, setFormulario] = useState({});

    useEffect(() => {
        const actions = [
            {label: "Criar", handleClick: (() => console.log('Criando fomulário')), icon: (<CreateIcon/>)}
        ]

        setActions(actions);
    }, [setActions, formulario])

    const openEditarDialog = (formulario) => {
        setFormulario(formulario);
        setEditarDialogOpen(true);
    }

    const closeEditarDialog = () => {
        setEditarDialogOpen(false);
    }

    const handleEditarFormulario = (e) => {
        setFormulario({ ...formulario, [e.target.name]: e.target.value });
    }

    const handleEditarFormularios = (novoFormulario) => {
        console.log(novoFormulario);
        closeEditarDialog();
    }
    
    return (
        <>
        <EditarDialog formulario={formulario} closeEditarDialog={closeEditarDialog} handleEditarFormularios={() => handleEditarFormularios(formulario)} open={editarDialogOpen} handleEditarFormulario={handleEditarFormulario}/>
        <Box className="flexColumn" gap={2}>
            {formularios && formularios.map((formulario, index) => {
                return <CardFormulario key={index} theme={theme} showToast={showToast} formulario={formulario} openEditarDialog={openEditarDialog}/>;
            })}
        </Box>
        </>
    )
}

const CardFormulario = ({formulario, theme, showToast, openEditarDialog}) => {

    const handleCopyClick = (formulario) => {
        navigator.clipboard.writeText(formulario.url);
        showToast(`Link para formulário ${formulario.nome} copiado para área de transferência`);
    }

    return (
        <Box bgcolor={theme.palette.white.main} p={2} borderRadius={3} className="flexRowBetween">
            <Box className="flexRowCenter" gap={2}>
                <Typography fontSize={16}>{formulario.nome}</Typography>
                <Divider orientation="vertical" flexItem/>
                <Typography fontSize={14} color="#5e5e5e">{formulario.url}</Typography>
            </Box>
            <Box className="flexRowCenter" gap={3}>
                <ButtonGroup color="primary" variant="text">
                    <Tooltip title="Copiar link"><Button onClick={() => handleCopyClick(formulario)}><ContentPasteIcon/></Button></Tooltip>
                    <Tooltip title="Editar"><Button onClick={() => openEditarDialog(formulario)}><EditIcon/></Button></Tooltip>
                    <Tooltip title="Excluir"><Button><DeleteIcon/></Button></Tooltip>
                </ButtonGroup>
            </Box>
        </Box>
    );
}

const EditarDialog = ({closeEditarDialog, open, formulario, handleEditarFormulario, handleEditarFormularios}) => {
    return (
        <Dialog open={open} onClose={closeEditarDialog}>
            <DialogTitle>Editar Formulário</DialogTitle>
            <DialogContent>
                <TextField onChange={handleEditarFormulario} margin="dense" name="nome" value={formulario.nome} label="Nome" variant="standard" fullWidth/>
                <TextField onChange={handleEditarFormulario} margin="dense" name="url" value={formulario.url} label="Link" variant="standard" fullWidth/>
            </DialogContent>
            <DialogActions>
                <Botao onClick={closeEditarDialog} variant="outlined" color="primary" txt="Cancelar"/>
                <Botao onClick={handleEditarFormularios} txt="Confirmar"/>
            </DialogActions>
      </Dialog>
    );
}

export default Formularios;