import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Usuarios from '../../pages/users/index';
import { Button, Row } from 'react-bootstrap';
import logo from './../../../constants/logo.svg';
import { getUsers } from '../../../redux/actions/actionUsers';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [usuarios, SetUsuarios] = useState([]);

  function AxiosGet(){
    const response = axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      SetUsuarios(response.data);
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <br/>
      {console.log(usuarios)}
      <Row className='justify-content-center'>
        <Button onClick={AxiosGet}>Hola</Button>
        {/* <Usuarios /> */}
      </Row>
    </div>
  );
}

export default App;
