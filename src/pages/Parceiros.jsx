import React, { useEffect } from "react";

const Parceiros = ({setTitulo}) => {

    useEffect(() => {
        setTitulo("Parceiros");
    })

    return (
        <>
            Parceiros
        </>
    )
}

export default Parceiros;