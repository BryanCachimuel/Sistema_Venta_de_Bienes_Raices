import {useForm} from 'react-hook-form';

function LoginPage() {

  const {register, handleSubmit, formState: {errors}} = useForm();

  const InicioOnSubmit = handleSubmit(data => {
    console.log(data);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <h1 className="text-2xl font-bold">Inicio de Sesión</h1>
        <form onSubmit={InicioOnSubmit}>
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