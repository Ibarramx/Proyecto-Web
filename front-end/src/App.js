import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PrimerFormulario from './componentes/PrimerFormulario';
import Usuario from './componentes/Usuario';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [personaNombre, setPersona] = useState("Jonathan Moroyoqui");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <br/>
      
      <Row className='justify-content-center'>
        <Col sm={6}>
          <Usuario/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
