import './App.css';
import Encabezado from './Componentes/compartidos/Encabezado';
import Principal from './Componentes/compartidos/Principal';
import Pie from './Componentes/compartidos/Pie';
import Meta from './Componentes/lista/Meta';

function App() {
  return (
    <div className="App">
      <Encabezado></Encabezado>
      <Principal>
        <Meta></Meta>
      </Principal>
      <Pie></Pie>
    </div>
  );
}

export default App;
