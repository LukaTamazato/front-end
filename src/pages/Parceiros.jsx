import React, { useEffect, useState } from "react";
import { getUsuarios } from "../utils/dataMockUtil";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import MudarVisualizacao from "../components/mudarVisualizacao/MudarVisualizacao";

const Parceiros = ({ setTitulo, setActions }) => {
  useEffect(() => {
    setTitulo("Parceiros");
    setActions(null);
  }, []);

  const [usuarios, setUsuarios] = useState([]);
  const [nomePesquisado, setNomePesquisado] = useState("");

  const handleSearchChange = (e) => {
    setNomePesquisado(e.target.value);
  };

  useEffect(() => {
    setUsuarios(
      getUsuarios.filter((user) =>
        user.nome.toLowerCase().includes(nomePesquisado.toLowerCase())
      )
    );
  }, [setUsuarios, nomePesquisado]);

  return (
    <>
      <MudarVisualizacao
        setFiltroStatus={() => {}}
        handleSearchChange={handleSearchChange}
        opcoesFiltro={""}
        nomePesquisado={""}
        setNomePesquisado={setNomePesquisado}
      />
      <Grid container spacing={3}>
        {usuarios &&
          usuarios.map((usuario, index) => {
            return (
              <Grid
                item
                size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
                key={index}
              >
                <CardUsuario usuario={usuario} />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

const CardUsuario = (usuario) => {
  const user = usuario.usuario;

  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" height={140} image={user.imagem} />
        <CardContent>
          <Box
            className="flexColumn"
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            <Typography gutterBottom variant="h6" component="div">
              {user.nome}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {user.idade} anos
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {user.local}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {user.cidade}
            </Typography>
            <Stack mt={2}>
              <Rating defaultValue={user.avaliacao} precision={0.5} readOnly />
            </Stack>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Parceiros;
