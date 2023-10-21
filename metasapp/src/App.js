import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Componentes/compartidos/Layout';
import Lista from './Componentes/lista/lista';
import Detalles from './Componentes/nueva/Detalles';
import NoEncontrado from './Componentes/compartidos/NoEncontrado';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Lista/>}/>
        <Route path='/Lista' element={<Lista/>}/>
        <Route path='/crear' element={<Detalles/>}/>
      </Route>
        <Route path='*' element={<NoEncontrado/>}/>
    
  </Routes>
  );
}

export default App;
