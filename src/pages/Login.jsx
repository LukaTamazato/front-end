import React, { useEffect, useState } from "react";
import { logar } from "../services/UsuarioService";
import CampoTexto from "../components/input/CampoTexto";
import Botao from "../components/btn/Botao";

const Login = ({setTitulo, setActions}) => {

    useEffect(() => {
        setTitulo("");
        setActions(null);
    })

    const [dados, setDados] = useState({
        email: '',
        senha: ''
    });

    const handleChange = (e, name) => {
        setDados({ ...dados, [name]: e.target.value });
    };

    return (
        <>
        <CampoTexto name="email" value={dados.email} handleChange={handleChange} label="E-mail"/>
        <CampoTexto name="senha" value={dados.senha} handleChange={handleChange} label="Senha" type="password"/>
        <Botao txt="Logar" onClick={(() => logar(dados))} />
        </>
    );
}

export default Login;