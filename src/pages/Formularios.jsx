import React, { useEffect } from "react";

const Formularios = ({setTitulo}) => {

    useEffect(() => {
        setTitulo("Formulários");
    })
    
    return (
        <>
            Formulários
        </>
    )
}

export default Formularios;