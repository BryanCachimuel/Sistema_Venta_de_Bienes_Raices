import {useForm} from 'react-hook-form';
import {useAuth} from '../context/AuthContext';

function LoginPage() {

  const {register, handleSubmit, formState: {errors}} = useForm();

  const {inicioSesionUsuario, errors: inicioSesionErrors} = useAuth();

  const InicioOnSubmit = handleSubmit(data => {
    inicioSesionUsuario(data);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        {
          inicioSesionErrors.map((error, i) => (
            <div className="bg-red-500 p-2 text-white" key={i}>
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
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage