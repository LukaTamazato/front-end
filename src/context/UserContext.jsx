import { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [tipoUsuario, setTipoUsuario] = useState(
    sessionStorage.getItem("tipoUsuario")
  );

  const login = (userData) => {
    setTipoUsuario(userData.tipoUsuario);
    sessionStorage.setItem("tipoUsuario", userData.tipoUsuario);
  };

  useEffect(() => {
    const storedTipoUsuario = sessionStorage.getItem("tipoUsuario");
    if (storedTipoUsuario) {
      setTipoUsuario(storedTipoUsuario);
    }
  }, []);

  return (
    <UserContext.Provider value={{ tipoUsuario, setTipoUsuario, login }}>
      {children}
    </UserContext.Provider>
  );
};
