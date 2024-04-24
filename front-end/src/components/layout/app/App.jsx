import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Usuarios from '../../pages/users/index';
import { Row } from 'react-bootstrap';
import logo from './../../../constants/logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <br/>
      <Row className='justify-content-center'>
        <Usuarios />
      </Row>
    </div>
  );
}

export default App;
