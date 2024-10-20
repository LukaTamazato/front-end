import { useEffect } from "react";

const EventosConfirmados = ({ setTitulo, setActions }) => {

    useEffect(() => {
        setTitulo("Eventos confirmados");
        setActions(null);
    })

    return (
        <>
        </>
    );
}

export default EventosConfirmados;