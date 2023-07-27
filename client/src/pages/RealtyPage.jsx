import { useEffect } from 'react';
import {useRealty} from '../context/RealtyContext';
import RealtyCard from '../components/RealtyCard';

function RealtyPage() {

  const {obtenerTodosBienesRaices, realtys} = useRealty();
  
  useEffect(() => {
    obtenerTodosBienesRaices();
  },[]);

  if(realtys.length === 0) return (<h1>No Existe Bienes Raices</h1>);

  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2'>
      {realtys.map((realty) =>(
       <RealtyCard realty={realty} key={realty._id}/>
      ))}
    </div>
  )
}

export default RealtyPage