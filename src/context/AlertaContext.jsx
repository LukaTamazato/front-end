import React, { createContext, useContext, useState, useCallback } from "react";
import Alerta from "../components/alerta/Alerta";
import CheckIcon from "@mui/icons-material/Check";
import BlockIcon from "@mui/icons-material/Block";

const AlertaContext = createContext();

export function AlertaProvider({ children }) {
  const [alertaOpen, setAlertaOpen] = useState(false);
  const [alertaLabel, setAlertaLabel] = useState("");
  const [alertaSeverity, setAlertaSeverity] = useState("");
  const [alertaIcon, setAlertaIcon] = useState(null);

  const showAlerta = useCallback(
    (label, severity = "success") => {
      let icon;
      switch (severity) {
        case "success":
          icon = <CheckIcon />;
          break;
        case "error":
          icon = <BlockIcon />;
          break;
      }

      setAlertaLabel(label);
      setAlertaIcon(icon);
      setAlertaSeverity(severity);
      setAlertaOpen(true);
    },
    [setAlertaLabel, setAlertaIcon, setAlertaSeverity, setAlertaOpen]
  );

  return (
    <AlertaContext.Provider value={{ showAlerta }}>
      <Alerta
        setAlertaOpen={setAlertaOpen}
        severity={alertaSeverity}
        open={alertaOpen}
        label={alertaLabel}
        icon={alertaIcon}
      />
      {children}
    </AlertaContext.Provider>
  );
}

export function useAlerta() {
  return useContext(AlertaContext);
}
