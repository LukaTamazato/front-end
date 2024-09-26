import React from 'react';
import { Box, Modal, Typography, TextField, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SYButton from '../btn/SYButton';
import Grid from '@mui/material/Grid2';

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

const SYModal = ({ handleOpen, handleClose, handleChange, handleConfirm, handleCancel, title, open, inputs, gridSize }) => {
    return (
        <div>
            <SYButton
                txt="Abrir"
                onClick={handleOpen}
            />
            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography id="modal-title" variant="h5" component="h2">
                            {title}
                        </Typography>
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Box component="form" sx={{ mt: 2 }}>
                        <Grid container columnSpacing={2}>
                            {
                                inputs.map((item, index) => {
                                    return (
                                        <Grid key={index} size={gridSize}>
                                            <TextField
                                                fullWidth
                                                margin="normal"
                                                label={item.label}
                                                name={item.name}
                                                value={item.value}
                                                onChange={(e) => handleChange(e, item.name)}
                                            />
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                        <Box mt={3} display="flex" justifyContent="center">
                            <SYButton variant="outlined" color="primary" txt="Cancelar" onClick={handleCancel} style={{ marginRight: 2 }} />
                            <SYButton txt="Confirmar" onClick={handleConfirm} />
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};

export default SYModal;
