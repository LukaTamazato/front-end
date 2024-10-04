import React, { useEffect } from "react";

const EventosFechados = ({setTitulo}) => {

    useEffect(() => {
        setTitulo("Eventos fechados");
    })

    return (
        <>
            Eventos fechados
        </>
    )
}

export default EventosFechados;