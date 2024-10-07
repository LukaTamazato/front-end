import React, { useEffect } from "react";

const Dashboard = ({setTitulo, setActions}) => {

    useEffect(() => {
        setTitulo("Dashboard");
        setActions(null);
    })

    return (
        <>
            auhauh
        </>
    )
}

export default Dashboard;