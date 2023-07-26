import { useRealty } from "../context/RealtyContext";
import {Link} from 'react-router-dom';

function RealtyCard({realty}) {

  const {eliminarBienRaiz} = useRealty();

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{realty.inmueble}</h1>
        <div className="flex gap-x-2 items-center">
          <button onClick={() =>{eliminarBienRaiz(realty._id)}}>Eliminar</button>
          <Link to={`/bienes_raices/${realty._id}`}>Editar</Link>
        </div>
      </header>
      <p className="text-slate-300">{realty.descripcion}</p>
      <p className="text-slate-300">{realty.propietario}</p>
      <p className="text-slate-300">{realty.costo}</p>
      <p className="text-slate-300">{realty.antiguedad}</p>
      <p className="text-slate-300">{new Date(realty.fecha).toLocaleDateString()}</p>
    </div>
  );
}

export default RealtyCard;
