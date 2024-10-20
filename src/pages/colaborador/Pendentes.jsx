import { useEffect } from "react";

const EventosPendentes = ({ setTitulo, setActions }) => {

    useEffect(() => {
        setTitulo("Eventos pendentes");
        setActions(null);
    })

    return (
        <>
        </>
    );
}

export default EventosPendentes;