import { useRealty } from "../context/RealtyContext";
import {Link} from 'react-router-dom';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

/* para hacer la transformación exacata de la fecha */
dayjs.extend(utc);

function RealtyCard({realty}) {

  const {eliminarBienRaiz} = useRealty();

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{realty.inmueble}</h1>
        <div className="flex gap-x-2 items-center">
          <button 
            onClick={() =>{eliminarBienRaiz(realty._id)}}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Eliminar
          </button>
          <Link 
            to={`/bienes_raices/${realty._id}`}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Editar
          </Link>
        </div>
      </header>
      <p className="text-slate-300">{realty.descripcion}</p>
      <p className="text-slate-300">{realty.propietario}</p>
      <p className="text-slate-300">{realty.costo}</p>
      <p className="text-slate-300">{realty.antiguedad}</p>
      <p className="text-slate-300">{dayjs(realty.fecha).utc().format("DD/MM/YYYY")}</p>
    </div>
  );
}

export default RealtyCard;
