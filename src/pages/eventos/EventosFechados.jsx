import { useEffect } from "react";

const EventosFechados = ({ setTitulo, setActions }) => {
  useEffect(() => {
    setTitulo("Eventos fechados");
    setActions(null);
  });

  return <>Eventos fechados</>;
};

export default EventosFechados;
