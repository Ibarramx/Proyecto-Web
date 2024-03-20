import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PrimerFormulario from './componentes/PrimerFormulario';
import Usuario from './componentes/Usuario';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [personaNombre, setPersona] = useState("Jonathan Moroyoqui");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='col-6 center' >
        <Usuario/>
      </div>
    </div>
  );
}

export default App;
