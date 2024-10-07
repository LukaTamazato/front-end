import React, { useEffect } from "react";

const Formularios = ({setTitulo, setActions}) => {

    useEffect(() => {
        setTitulo("Formulários");
        setActions(null);
    })
    
    return (
        <>
            Formulários
        </>
    )
}

export default Formularios;