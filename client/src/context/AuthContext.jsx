import { createContext, useState, useContext, useEffect } from "react";

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
      /*
      está validación se hace cuando en el backend se determina que se envia un mensaje tipo así -> return res.status(400).json({message:"Contraseña Incorrecta"});
      if(Array.isArray(error.response.data)){
        return setErrors(error.response.data)
      }
      setErrors([error.response.data.message])*/
      console.log(error.response);
      setErrors(error.response.data);
    }
  }

  /* para eliminar los mensajes de error una vez sean vistos por el usuario */
  useEffect(() => {
    if(errors.length > 0){
      const tiempo = setTimeout(() => {
                      setErrors([])
                    }, 8000)
      return () => clearTimeout(tiempo);
    }
  },[errors])

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
