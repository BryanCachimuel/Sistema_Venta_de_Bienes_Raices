import {createContext, useContext, useState} from 'react';
import {crearBienRaizRequest} from '../api/realty';

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

    const crearBienesRaices = async (bienRaiz) => {
        try {
            const respuesta = await crearBienRaizRequest(bienRaiz);
            console.log(respuesta);
        } catch (error) {
            console.log(error.response);
        }
    }

    return(
        <RealtyContext.Provider value={{realtys, crearBienesRaices}}>
            {children}
        </RealtyContext.Provider>
    );
}