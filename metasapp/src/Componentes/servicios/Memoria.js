 import {createContext } from "react";

 export const Contexto = createContext(null);

 function Memoria({children}) {
    return (
        <Contexto.Provider value={'compartido'}>
            {children}
        </Contexto.Provider>
    );
 }
 export default Memoria;