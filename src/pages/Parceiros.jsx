import React, { useEffect } from "react";

const Parceiros = ({setTitulo, setActions}) => {

    useEffect(() => {
        setTitulo("Parceiros");
        setActions(null);
    })

    return (
        <>
            Parceiros
        </>
    )
}

export default Parceiros;