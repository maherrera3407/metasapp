import './App.css';
import Encabezamiento from './Componentes/compartidos/Encabezamiento';
import Principal from './Componentes/compartidos/Principal';
import Pie from './Componentes/compartidos/Pie';

function App() {
  return (
    <div className="App">
      <Encabezamiento></Encabezamiento>
      <Principal></Principal>
      <Pie></Pie>
    </div>
  );
}

export default App;
