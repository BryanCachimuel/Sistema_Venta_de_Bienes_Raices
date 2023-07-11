import {useForm} from 'react-hook-form'

function RealtyFormPage() {

  const {register, handleSubmit} = useForm();

  const registraronSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <form onSubmit={registraronSubmit}>
        <input 
          type="text" 
          placeholder="Tipo de Inmueble" 
          {...register("inmueble")} 
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          autoFocus
        />

        <textarea 
          rows="3" 
          placeholder="Descripción de Inmueble"
          {...register("descripcion")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2">
        </textarea>

        <input 
          type="text" 
          placeholder="Nombre del Propietario"
          {...register("propietario")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />

        <input 
          type="number" 
          placeholder="Costo del Inmueble"
          {...register("costo")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />

        <input 
          type="number" 
          placeholder="Antiguedas del Inmueble"
          {...register("antiguedad")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />

        <button>
          Guardar
        </button>
      </form>
    </div>
  )
}

export default RealtyFormPage