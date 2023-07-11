import {createContext, useContext} from 'react';

const RealtyContext = createContext();

export const useRealty = () => {
    const context = useContext(RealtyContext);
    if(!context){
        throw new Error("useRealty esta siendo usado sin RealtyProvider");
    }
    return context;
}

export function RealtyProvider({children}) {
    return(
        <RealtyContext.Provider value={{}}>
            {children}
        </RealtyContext.Provider>
    );
}