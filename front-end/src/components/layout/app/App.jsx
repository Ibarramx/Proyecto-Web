import React from 'react';
import Routes from '../../../route/index';
import Sidebar from './Sidebar';
import { Col, Row, Container } from 'react-bootstrap';

function App( props ) {
  const route = Routes.find((route) => route.path === props.path);
 
  const ComponentToRender = route.component;
  return (    
    <Container>
      <Sidebar />
      <ComponentToRender />
    </Container>
  );
}

export default App;
