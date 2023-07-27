import {useForm} from 'react-hook-form'
import {useRealty} from '../context/RealtyContext';
import {useNavigate, useParams} from 'react-router-dom';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

/* para hacer la transformación exacata de la fecha */
dayjs.extend(utc);

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
      setValue('fecha', dayjs(realty.fecha).utc().format("YYYY-MM-DD"));
    }
  }
  cargarBienesRaices();
},[])
  
  const registraronSubmit = handleSubmit((data) => {

    const fechaValida = {
      ...data,
      fecha: data.fecha ? dayjs.utc(data.fecha).format() : dayjs.utc().format(),
    }

   if(parametros.id){
    actualizarBienRaiz(parametros.id, fechaValida);
   }else{
    crearBienesRaices(fechaValida);  
   }
   navegar('/bienes_raices');
  })

  return (
   <div className="flex h-[calc(120vh-100px)] items-center justify-center">
     <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <form onSubmit={registraronSubmit} autoComplete='off'>
        <h1 className="text-2xl font-bold">Crear Bien Raíz</h1>

        <label htmlFor="inmueble">Nombre de Inmueble:</label>
        <input 
          type="text" 
          placeholder="Tipo de Inmueble" 
          {...register("inmueble")} 
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          autoFocus
        />

        <label htmlFor="descripcion">Descripción:</label>
        <textarea 
          rows="3" 
          placeholder="Descripción de Inmueble:"
          {...register("descripcion")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2">
        </textarea>

        <label htmlFor="propietario">Nombre del Propietario:</label>
        <input 
          type="text" 
          placeholder="Nombre del Propietario:"
          {...register("propietario")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />

        <label htmlFor="costo">Costo del Inmueble:</label>
        <input 
          type="number" 
          placeholder="Costo del Inmueble:"
          {...register("costo", { valueAsNumber: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />

        <label htmlFor="antiguedad">Antiguedad de la Propiedad:</label>
        <input 
          type="number" 
          placeholder="Antiguedas del Inmueble"
          {...register("antiguedad", { valueAsNumber: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />

        <label htmlFor="fecha">Fecha:</label>
        <input type="date" {...register('fecha')}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />

        <button className='bg-indigo-500 px-3 py-2 my-3 rounded-md'>
          Guardar
        </button>
      </form>
    </div>
   </div>
  )
}

export default RealtyFormPage