import { useEffect } from 'react';
import {useRealty} from '../context/RealtyContext'

function RealtyPage() {

  const {obtenerTodosBienesRaices, realtys} = useRealty();
  
  useEffect(() => {
    obtenerTodosBienesRaices();
  },[])

  return (
    <div>
      {realtys.map((realty) =>(
        <div key={realty._id}>
          <h1>{realty.inmueble}</h1>
          <p>{realty.descripcion}</p>
          <p>{realty.propietario}</p>
          <p>{realty.costo}</p>
          <p>{realty.antiguedad}</p>
        </div>
      ))}
    </div>
  )
}

export default RealtyPage