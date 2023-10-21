import Encabezado from './Encabezado';
import Principal from './Principal';
import Pie from './Pie';
import { Outlet } from 'react-router';
//import Lista from './Componentes/lista/lista';
//import Detalles from './Componentes/nueva/Detalles';
function Layout(){
    return(    
  <>
    <Encabezado></Encabezado>
    <Principal>
       <Outlet></Outlet>
    </Principal>
    <Pie></Pie>
  </>);
}
export default Layout;