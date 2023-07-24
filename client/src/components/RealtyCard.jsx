function RealtyCard({realty}) {
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <h1 className="text-2xl font-bold">{realty.inmueble}</h1>
      <p className="text-slate-300">{realty.descripcion}</p>
      <p className="text-slate-300">{realty.propietario}</p>
      <p className="text-slate-300">{realty.costo}</p>
      <p className="text-slate-300">{realty.antiguedad}</p>
      <p className="text-slate-300">{new Date(realty.fecha).toLocaleDateString()}</p>
      <button>Eliminar</button>
      <button>Editar</button>
    </div>
  );
}

export default RealtyCard;
