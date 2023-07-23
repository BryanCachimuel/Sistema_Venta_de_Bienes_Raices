import {useForm} from 'react-hook-form';
import {useAuth} from '../context/AuthContext';
import {Link, useNavigate} from 'react-router-dom'
import { useEffect } from 'react';

function LoginPage() {

  const {register, handleSubmit, formState: {errors}} = useForm();

  const {inicioSesionUsuario, errors: inicioSesionErrors, isAuthenticated} = useAuth();
  const navegar = useNavigate();

  const InicioOnSubmit = handleSubmit(data => {
    inicioSesionUsuario(data);
  });

  useEffect(() => {
    if(isAuthenticated) navegar("/bienes_raices");
  }, [isAuthenticated]);

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        {
          inicioSesionErrors.map((error, i) => (
            <div className="bg-red-500 p-2 text-white text-center my-2" key={i}>
              {error}
            </div>
          ))
        }
        <h1 className="text-2xl font-bold">Inicio de Sesión</h1>
        <form onSubmit={InicioOnSubmit} autoComplete='off'>
          <input
            type="email"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            {...register("email", { required: true })}
            placeholder="Correo Electrónico"
          />
          {errors.email && (<p className="text-red-500">El Correo de Usuario Requerido</p>)}
          <input
            type="password"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            {...register("password", { required: true })}
            placeholder="Contraseña"
          />
          {errors.password && (<p className="text-red-500">Contraseña de Usuario Requerido</p>)}
          <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded mb-6 mt-3" type="submit">Ingresar</button>
        </form>
        <hr />
        <p className="flex gap-x-2 justify-between mt-3">
          Si no se a registrado por favor, <Link to="/registro" className="text-sky-500">Registrarse</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage