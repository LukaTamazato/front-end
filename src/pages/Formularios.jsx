import React, { useEffect, useState } from "react";
import Alerta from "../components/alerta/Alerta";
import { Button, Snackbar } from "@mui/material";

const Formularios = ({setTitulo, setActions}) => {

    useEffect(() => {
        setTitulo("Formulários");
        setActions(null);
    })

    
    return (
        <>
        </>
    )
}

export default Formularios;