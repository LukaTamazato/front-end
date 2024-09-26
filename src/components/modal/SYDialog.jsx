import React, { useState } from 'react';
import SYModal from './components/modal/SYModal';

const SYDialog = () => {
    const [open, setOpen] = useState(false);
    const [dados, setDados] = useState({
        name0: '',
        name1: '',
        name2: '',
        name3: '',
        name4: '',
        name5: ''
    });

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

    const inputs = [
        {
            name: "name0",
            label: "Nome",
            value: dados.name0
        },
        {
            name: "name1",
            label: "Nome",
            value: dados.name1
        },
        {
            name: "name2",
            label: "Nome",
            value: dados.name2
        },
        {
            name: "name3",
            label: "Nome",
            value: dados.name3
        },
        {
            name: "name4",
            label: "Nome",
            value: dados.name4
        },
        {
            name: "name5",
            label: "Nome",
            value: dados.name5
        }
    ]

    return (
        <div>
            <SYModal
                handleCancel={handleCancel}
                handleClose={handleClose}
                handleOpen={handleOpen}
                handleConfirm={handleConfirm}
                handleChange={handleChange}
                open={open}
                inputs={inputs}
                gridSize={{ sm: 12, md: 6 }}
                title="Título" />
        </div>
    );
};

export default SYDialog;
