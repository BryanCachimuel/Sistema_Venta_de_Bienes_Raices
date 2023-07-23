import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
        <Link to='/'>
            Directorio Bienes Raices
        </Link>
        <ul className="flex gap-x-2">
            <li>
                <Link to='/iniciar_sesion'>Inicio Sesión</Link>
            </li>
            <li>
                <Link to='/registro'>Registro</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar