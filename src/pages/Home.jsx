import React, { useEffect } from "react";

const Home = ({setTitulo, setActions}) => {

    useEffect(() => {
        setTitulo('Home');
        setActions(null);
    });

    return (
        <>
        </>
    )
}

export default Home;