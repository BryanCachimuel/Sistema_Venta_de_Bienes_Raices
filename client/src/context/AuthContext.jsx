import { createContext, useState, useContext } from "react";

import { registroRequest, inicioSesionRequest } from "../api/auth.js";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth dentro del AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  const registroUsuarios = async (user) => {
    try {
        const respuesta = await registroRequest(user);
        console.log(respuesta.data);
        setUser(respuesta.data);
        setIsAuthenticated(true);
    } catch (error) {
      //console.log(error.response);
        setErrors(error.response.data);
    }
  };

  const inicioSesionUsuario = async (user) => {
    try {
      const respuesta = await inicioSesionRequest(user);
      console.log(respuesta);
    } catch (error) {
      console.log(error.response);
      setErrors(error.response.data);
    }
  }

  return (
    <AuthContext.Provider 
        value={{ 
            registroUsuarios, 
            inicioSesionUsuario,
            user, 
            isAuthenticated,
            errors,
        }}
    >
      {children}
    </AuthContext.Provider>
  );
};
