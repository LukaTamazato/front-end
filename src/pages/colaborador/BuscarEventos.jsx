import { useEffect } from "react";

const BuscarEventos = ({ setTitulo, setActions }) => {

    useEffect(() => {
        setTitulo("Buscar eventos");
        setActions(null);
    })

    return (
        <>
        </>
    );
}

export default BuscarEventos;