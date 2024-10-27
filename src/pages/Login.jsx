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
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import imagemFundo from '../assets/Login.png';
import { Password } from "@mui/icons-material";
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
    <Box
    className="flexRowCenter"
    height="100vh"
    sx={{
      backgroundImage: `url(${imagemFundo})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    }}
  >
    <Paper
      sx={{

        width: "26%",
        height: "69%",
        p: 8,
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        marginLeft: "190px",
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)", // Customize as needed
      }}
    >
      <Typography
       variant="h5"
       sx={{
          fontWeight: "normal",
          mb: 12,
          fontSize: "41px", // Altere para o tamanho desejado
          marginRight: "10px",
          marginTop: "39px", // Alinha o texto à esquerda
          ml: 0, // Margem à esquerda, ajuste conforme necessário
        }}
      >
        <b>Entrar</b> em Seren<span style={{ color: "#f27a0c" }}>it</span>y
      </Typography>

      
              
      <Typography
          variant="subtitle1"
          sx={{
            mb: 1,
            color: "#182F4E",
            fontWeight: "bold",
             marginBottom:"19px"
          }}
        >
          E-mail:
      </Typography>
       <CampoTexto
        placeholder={"Email address"}
        name="email"
        value={dados.email}
        handleChange={handleChange}
        startAdornment={<EmailIcon />}
        borderRadius={"9px"}
      />


      <Typography
          variant="subtitle1"
          sx={{
            mb: 0,
            color: "#182F4E",
            fontWeight: "bold",
            marginTop: "20px",
            marginBottom:"19px" // Altere para a cor desejada
          }}
        >
          Senha:
      </Typography>
      <CampoTexto
        borderRadius = "6px"
        placeholder={"Password"}
        name="senha"
        value={dados.senha}
        handleChange={handleChange}
        type="password"
        startAdornment={<LockIcon />}
      />

      <Box sx={{ height: "17%" }} mt={4} className="flexRowCenter">
        {!loading ? (
          <Botao 
          sx={{ 
              width: "100%", 
              height: "60px", 
              textTransform: "none",
              borderRadius: "12px",
              marginTop: "70px" 
          }} 
          txt="Login" 
          color="primary" 
          onClick={handleLogin}
      />
        ) : (
          <CircularProgress color="secondary" />
        )}
      </Box>
    </Paper>
  </Box>
);
};


export default Login;
