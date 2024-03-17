import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PrimerFormulario from './componentes/PrimerFormulario';
import Usuario from './componentes/Usuario';

function App() {
  const [personaNombre, setPersona] = useState("Jonathan Moroyoqui");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Usuario></Usuario>
    </div>
  );
}

export default App;
