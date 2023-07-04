/* se usa el hook useForm para hacer un proceso más consiso para los formularios */
import { useForm } from "react-hook-form";
import { registroRequest } from "../api/auth.js";

function RegisterPage() {
  const { register, handleSubmit } = useForm();

  const registroOnSubmit = handleSubmit(async (values) => {
    const respuesta = registroRequest(values);
    console.log(respuesta);
  });

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      <form onSubmit={registroOnSubmit}>
        <input
          type="text"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          {...register("username", { required: true })}
          placeholder="Nombre de Usuario"
        />

        <input
          type="email"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          {...register("email", { required: true })}
          placeholder="Correo Electrónico"
        />
        <input
          type="password"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          {...register("password", { required: true })}
          placeholder="Contraseña"
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default RegisterPage;
