import React, { useEffect } from "react";

const DemandasFechadas = ({ setTitulo, setActions }) => {
  useEffect(() => {
    setTitulo("Demandas fechadas");
    setActions(null);
  });

  return <>Demandas fechadas</>;
};

export default DemandasFechadas;
