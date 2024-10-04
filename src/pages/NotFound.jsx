import React, { useEffect } from "react";

const NotFound = ({setTitulo}) => {

    useEffect(() => {
        setTitulo('Página não encontrada.');
    });

    return (
        <>
        </>
    )
}

export default NotFound;