import React, { useEffect } from "react";
import Dialogo from "../components/dialogo/Dialogo";

const EventosAbertos = ({setTitulo}) => {

    useEffect(() => {
        setTitulo("Eventos Abertos");
    })

    return (
        <>
            <Dialogo/>
        </>
    )
}

export default EventosAbertos;