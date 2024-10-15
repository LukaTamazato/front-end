import React, { useEffect } from "react";

const DemandasAbertas = ({setTitulo, setActions}) => {

    useEffect(() => {
        setTitulo("Demandas abertas");
        setActions(null);
    })

    return (
        <>
            Demandas abertas
        </>
    )
}

export default DemandasAbertas;