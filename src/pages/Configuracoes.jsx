import { useEffect } from "react";
import PageModal from "../components/pageModal/PageModal";

const Configuracoes = ({ setTitulo, setActions }) => {
  useEffect(() => {
    setTitulo("");
    setActions(null);
  }, []);

  return <PageModal></PageModal>;
};

export default Configuracoes;
