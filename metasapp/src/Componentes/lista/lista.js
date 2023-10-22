import { useContext } from "react";
import Meta from "./Meta";
import { Contexto } from "../servicios/Memoria";


function Lista(){
    const metas = useContext( Contexto);
    return( 
       metas.map(meta => <Meta key={meta.id} {...meta}></Meta>)
    );
}

export default Lista;