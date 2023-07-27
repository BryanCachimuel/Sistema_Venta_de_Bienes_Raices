import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, cerrar_sesion } = useAuth();

  /* No se pone el nombre del usuario por que da un error
  const { isAuthenticated, cerrar_sesion, user } = useAuth();*/

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <Link 
        to={isAuthenticated ? "/bienes_raices" : "/"}
      >
        Directorio Bienes Raices
      </Link>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li>
                <h1>Bienvenido</h1>
                {/*<h1>Bienvenido {user.username}</h1>*/}
            </li>
            <li>
              <Link to="/crear_bienes_raices"  className="bg-indigo-500 px-4 py-1 rounded-sm">Crear Bienes Raices</Link>
            </li>
            <li>
              <Link to="/" onClick={() => cerrar_sesion()}>Cerrar Cesión</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/iniciar_sesion" className="bg-indigo-500 px-4 py-1 rounded-sm">Inicio Sesión</Link>
            </li>
            <li>
              <Link to="/registro"  className="bg-indigo-500 px-4 py-1 rounded-sm">Registro</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
