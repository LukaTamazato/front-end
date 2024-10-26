import React, { useEffect, useState } from "react";
import { logar } from "../services/UsuarioService";
import CampoTexto from "../components/input/CampoTexto";
import Botao from "../components/btn/Botao";
import axios from "axios";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Typography,
} from "@mui/material";

const Login = ({ setTitulo, setActions }) => {
  const { login } = useUser();
  const [dados, setDados] = useState({ email: "", senha: "" });
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTitulo("");
    setActions(null);
  }, [setTitulo, setActions]);

  const handleChange = (e) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    setLoading(true);

    setTimeout(async () => {
      try {
        const { tipoUsuario } = await logar(dados);
        login({ tipoUsuario });
        navigate("/");
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <Box className="flexRowCenter" height={"100%"}>
      <Paper sx={{ width: "30%", p: 5 }}>
        <Typography variant="h5">Login</Typography>
        <CampoTexto
          name="email"
          value={dados.email}
          handleChange={handleChange}
          label="E-mail"
        />
        <CampoTexto
          name="senha"
          value={dados.senha}
          handleChange={handleChange}
          label="Senha"
          type="password"
        />
        <Box mt={4} className="flexRowCenter">
          {!loading && (
            <Botao sx={{ width: "60%" }} txt="Logar" onClick={handleLogin} />
          )}
          {!!loading && <CircularProgress color="secondary" />}
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
