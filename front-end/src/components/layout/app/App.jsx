import React from 'react';
import Routes from '../../../route/index';
import Sidebar from './Sidebar';
import { Col, Row } from 'react-bootstrap';

function App( props ) {
  const route = Routes.find((route) => route.path === props.path);
 
  const ComponentToRender = route.component;
  return (    
    <Row>
      <Col
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <Sidebar />
        <div className='m-1'>
          <ComponentToRender />
        </div>
      </Col>
    </Row>
  );
}

export default App;
