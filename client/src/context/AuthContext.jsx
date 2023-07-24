import { createContext, useState, useContext, useEffect } from "react";
import { registroRequest, inicioSesionRequest, verificarTokenRequest } from "../api/auth.js";
import Cookies from 'js-cookie'

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
  const [loading, setLoading] = useState(true);

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
      setIsAuthenticated(true);
      setUser(res.data);
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

  const cerrar_sesion = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    setUser(null);
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

  useEffect(() => {
    async function checkInicioSesion (){
      const cookies = Cookies.get();
      if(!cookies.token){
        setIsAuthenticated(false);
        setLoading(false);
        return setUser(null);
      }
        try {
          const respuesta = await verificarTokenRequest(cookies.token);

          if(!respuesta.data){
            setIsAuthenticated(false);
            setLoading(false);
            return;
          }
      
          setIsAuthenticated(true);
          setUser(respuesta.data);
          setLoading(false);
          
        } catch (error) {
          setIsAuthenticated(false);
          setUser(null);
          setLoading(false);
        } 
    }
    checkInicioSesion();
  },[])

  return (
    <AuthContext.Provider 
        value={{ 
            registroUsuarios, 
            inicioSesionUsuario,
            cerrar_sesion,
            loading,
            user, 
            isAuthenticated,
            errors,
        }}
    >
      {children}
    </AuthContext.Provider>
  );
};
