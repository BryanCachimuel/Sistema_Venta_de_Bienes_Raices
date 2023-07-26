import {useForm} from 'react-hook-form'
import {useRealty} from '../context/RealtyContext';
import {useNavigate, useParams} from 'react-router-dom';
import { useEffect } from 'react';

function RealtyFormPage() {

  const {register, handleSubmit, setValue} = useForm();

  const {crearBienesRaices, obtenerBienRaiz, actualizarBienRaiz} = useRealty();

  const navegar = useNavigate();
  const parametros = useParams();

useEffect(() => {
  async function cargarBienesRaices(){
    if(parametros.id){
      const realty = await obtenerBienRaiz(parametros.id);
      console.log(realty);
      setValue('inmueble',realty.inmueble);
      setValue('descripcion',realty.descripcion);
      setValue('propietario',realty.propietario);
      setValue('costo',realty.costo);
      setValue('antiguedad',realty.antiguedad);
    }
  }
  cargarBienesRaices();
},[])
  
  const registraronSubmit = handleSubmit((data) => {
   if(parametros.id){
    actualizarBienRaiz(parametros.id, data);
   }else{
    crearBienesRaices(data);  
   }
   navegar('/bienes_raices');
  })

  return (
   <div className="flex h-[calc(100vh-100px)] items-center justify-center">
     <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <form onSubmit={registraronSubmit} autoComplete='off'>
        <h1 className="text-2xl font-bold">Crear Bien Raíz</h1>
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
          {...register("costo", { valueAsNumber: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />

        <input 
          type="number" 
          placeholder="Antiguedas del Inmueble"
          {...register("antiguedad", { valueAsNumber: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />

        <button>
          Guardar
        </button>
      </form>
    </div>
   </div>
  )
}

export default RealtyFormPage