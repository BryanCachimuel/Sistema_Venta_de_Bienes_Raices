/* se usa el hook useForm para hacer un proceso más consiso para los formularios */
import { useForm } from "react-hook-form";
import {useAuth} from '../context/AuthContext';
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'

function RegisterPage() {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const {registroUsuarios, isAuthenticated, errors: registroErrores} = useAuth();
  const navegacion = useNavigate();
  
  useEffect(() => {
    if(isAuthenticated) navegacion("/bienes_raices");
  }, [isAuthenticated])

  const registroOnSubmit = handleSubmit(async (values) => {
     registroUsuarios(values);
  });

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      {
        registroErrores.map((error, i) => (
          <div className="bg-red-500 p-2 text-white" key={i}>
            {error}
          </div>
        ))
      }
      <form onSubmit={registroOnSubmit} autoComplete="off">
        <input
          type="text"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          {...register("username", { required: true })}
          placeholder="Nombre de Usuario"
        />
        {errors.username && (<p className="text-red-500">Nombre de Usuario Requerido</p>)}
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
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default RegisterPage;
