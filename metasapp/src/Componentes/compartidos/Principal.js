import estilos from'./Principal.module.css'
import Vinculo from './Vinculo';
import { ReactComponent as ListaSVG }from '../img/lista.svg';
import { ReactComponent as NuevaSVG } from '../img/nueva.svg';
function Principal({children}) {
    return (
      <div className={estilos.Principal}>
      <aside className={estilos.aside}>
        <Vinculo 
        to='/lista' 
        texto="Lista de metas"
        Icono={ListaSVG}/>
        <Vinculo 
        to='/crear' 
        texto="Nueva meta"
        Icono={NuevaSVG}/>
      </aside>
      <main className={estilos.main + " nm-convex-gray-100"} >
        {children}
      </main>
        
      </div>
    );
  }
  
  export default Principal;