import './App.css';
import Encabezado from './Componentes/compartidos/Encabezado';
import Principal from './Componentes/compartidos/Principal';
import Pie from './Componentes/compartidos/Pie';
import Lista from './Componentes/lista/lista';
import Detalles from './Componentes/nueva/Detalles';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
     <div className="App">
       <Encabezado></Encabezado>
       <Principal>
          <Lista></Lista>
          <Detalles></Detalles>
       </Principal>
       <Pie></Pie>
     </div>
    </Routes>
  );
}

export default App;
