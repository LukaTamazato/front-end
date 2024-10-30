import { useEffect, useState } from "react";
import PageModal from "../../components/pageModal/PageModal";
import Imagem from "../../components/imagem/Imagem";
import { fetchData } from "../../services/DataService";
import { useNavigate, useParams } from "react-router-dom";
import BlockIcon from "@mui/icons-material/Block";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, ButtonBase, Divider, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid2";
import DeleteIcon from "@mui/icons-material/Delete";
import img from "../../assets/evento-card-bg.png";
import EditIcon from "@mui/icons-material/Edit";
import { useTheme } from "@emotion/react";
import { aplicarMascara } from "../../utils/formatarUtil";
import dayjs from "dayjs";
import OutlinedBox from "../../components/box/OutlinedBox";
import Mapa from "../../mapa/Mapa";
import CampoRegistro from "../../components/input/CampoRegistro";
import Tabela from "../../components/tabela/Tabela";
import { getDemandas } from "../../utils/dataMockUtil";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { deleteEvento, putEvento } from "../../services/EventoService";
import DataHora from "../../components/input/DataHora";
import FloatingBotao from "../../components/btn/FloatingBotao";
import Registro from "../../layouts/Registro";

const RegistroEvento = ({
  setTitulo,
  setActions,
  toggleDialog,
  setDialogContent,
  setDialogAction,
}) => {
  return (
    // TODO: Deixar o componente genérico
    <Registro
      setTitulo={setTitulo}
      setActions={setActions}
      toggleDialog={toggleDialog}
      setDialogContent={setDialogContent}
      setDialogAction={setDialogAction}
    ></Registro>
  );
};

export default RegistroEvento;
