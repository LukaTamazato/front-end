import React, { useState } from 'react';
import { Box, Modal, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Botao from '../btn/Botao';
import Grid from '@mui/material/Grid2';
import CampoTexto from '../input/CampoTexto';

const Dialogo = () => {
    const [dados, setDados] = useState({
        nome: '',
        celular: '',
        telefone: '',
        email: '',
        cpf: '',
        rg: ''
    });
    const [open, setOpen] = useState(false);


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleConfirm = () => {
        handleClose();
    };

    const handleCancel = () => {
        setDados({ name: '' });
        handleClose();
    };

    const handleChange = (e, name) => {
        setDados({ ...dados, [name]: e.target.value });
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        border: 0
    };

    return (
        <div>
            <div>
            <Botao
                txt="Abrir"
                onClick={handleOpen}
            />
            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography id="modal-title" variant="h5" component="h5">
                            Título
                        </Typography>
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Box component="form" sx={{ mt: 2 }}>
                        <Grid container columnSpacing={2}>
                                <CampoTexto
                                    label="Nome Completo"
                                    name="nome"
                                    value={dados.nome}
                                    size={12}
                                    handleChange={handleChange}
                                />
                                <CampoTexto
                                    label="Celular"
                                    name="celular"
                                    value={dados.celular}
                                    handleChange={handleChange}
                                    regex={/^\(\d{2}\) \d{4}-\d{5}$/}
                                    mascara="celular"
                                    placeholder="(11) 9999-99999"
                                />
                                <CampoTexto
                                    label="Telefone"
                                    name="telefone"
                                    value={dados.telefone}
                                    handleChange={handleChange}
                                    regex={/^\(\d{2}\) \d{4}-\d{4}$/}
                                    mascara="telefone"
                                    errorMsg="Número inválido."
                                    placeholder="(11) 9999-9999"
                                    required={true}
                                />
                                <CampoTexto
                                    label="Email"
                                    name="email"
                                    size={12}
                                    value={dados.email}
                                    handleChange={handleChange}
                                />
                                <CampoTexto
                                    label="CPF"
                                    name="cpf"
                                    value={dados.cpf}
                                    handleChange={handleChange}
                                    regex={/^\d{3}.\d{3}.\d{3}-\d{2}$/}
                                    mascara="cpf"
                                    placeholder="000.000.000-00"
                                />
                                <CampoTexto
                                    label="RG"
                                    name="rg"
                                    value={dados.rg}
                                    handleChange={handleChange}
                                    regex={/^\d{2}.\d{3}.\d{3}-\d{1}$/}
                                    mascara="rg"
                                    placeholder="00.000.000-0"
                                />
                        </Grid>
                        <Box mt={3} display="flex" justifyContent="center">
                            <Botao variant="outlined" color="primary" txt="Cancelar" onClick={handleCancel} sx={{ marginRight: 2 }} />
                            <Botao txt="Confirmar" onClick={handleConfirm} />
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
        </div>
    );
};

export default Dialogo;
