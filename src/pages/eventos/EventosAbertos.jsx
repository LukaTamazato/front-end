import { useEffect } from "react";

const EventosAbertos = ({ setTitulo, setActions }) => {
  useEffect(() => {
    setTitulo("Eventos Abertos");
    setActions(null);
  });

  return <>Eventos abertos</>;
};

export default EventosAbertos;
