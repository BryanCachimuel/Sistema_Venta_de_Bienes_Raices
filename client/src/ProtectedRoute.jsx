import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "./context/AuthContext";

function ProtectedRoute() {
  const { loading, isAuthenticated } = useAuth();
  console.log(loading, isAuthenticated)
  {
    /* verificando si el usuario esta autenticado.
        se le pone replace para que no vuelva a  la ruta anterior.
    */
  }

  if(loading) return <h1>Cargando...</h1>
  if (!loading && !isAuthenticated) return <Navigate to={"/iniciar_sesion"} replace />;

  {
    /* si el usuario si esta logeado con el Outlet le dice que continue con la ruta siguiente que está autorizado por que si a podido iniciar sesión */
  }
  return <Outlet />;
}

export default ProtectedRoute;
