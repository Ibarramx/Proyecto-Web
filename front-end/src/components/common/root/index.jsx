import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { loadMessages } from '@progress/kendo-react-intl';
import mensajesKendo from '../kendo/es.json';

//Componentes
import App from '../../layout/app/App';

const Root = () => {
  loadMessages(mensajesKendo, 'es');

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route element={ <App path="/"/> } path='/' exact />
          <Route element={ <App path="Usuarios"/> } path="Usuarios" exact />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>      
  );
}

export default Root;