import {createContext, useContext, useState} from 'react';
import {crearBienRaizRequest, obtenerBienesRaicesRequest} from '../api/realty';

const RealtyContext = createContext();

export const useRealty = () => {
    const context = useContext(RealtyContext);
    if(!context){
        throw new Error("useRealty esta siendo usado sin RealtyProvider");
    }
    return context;
}

export function RealtyProvider({children}) {

    const [realtys, setRealtys] = useState([]);
    
    const obtenerTodosBienesRaices = async () => {
        try {
            const respuesta = await obtenerBienesRaicesRequest();
            setRealtys(respuesta.data);
            console.log(respuesta);
        } catch (error) {
            console.log(error.response);
        }
    }

    const crearBienesRaices = async (bienRaiz) => {
        try {
            const respuesta = await crearBienRaizRequest(bienRaiz);
            console.log(respuesta);
        } catch (error) {
            console.log(error.response);
        }
    }

    return(
        <RealtyContext.Provider 
            value={{
                realtys, 
                crearBienesRaices,
                obtenerTodosBienesRaices,
            }}
        >
            {children}
        </RealtyContext.Provider>
    );
}