import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Usuarios from './componentes/usuarios/index';
import { Row } from 'react-bootstrap';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <br/>
      
      <Row className='justify-content-center'>
        <Usuarios/>
      </Row>
    </div>
  );
}

export default App;
