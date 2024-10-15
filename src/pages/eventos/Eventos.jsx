import { useEffect } from "react";

const Eventos = ({setTitulo, setActions}) => {

    useEffect(() => {
        setTitulo("Eventos");
        setActions(null);
    })

    return (
        <>
            Eventos
        </>
    )
}

export default Eventos;