import React, { useEffect } from "react";

const NotFound = ({ setTitulo, setActions }) => {
  useEffect(() => {
    setTitulo("Página não encontrada.");
    setActions(null);
  });

  return <></>;
};

export default NotFound;
