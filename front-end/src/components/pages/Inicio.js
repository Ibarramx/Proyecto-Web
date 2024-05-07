import React from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';

function Inicio( ) {
  return (
        <Row>
          <Col md={6}>
              <h1>Bienvenido</h1>
              <p>
                Esto es una plantilla de ejemplo.
              </p>
              <Button variant="primary">Ver más</Button>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Card</Card.Title>
                <Card.Text>
                  Ejemplo de un card sencillo.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
  );
}
export default Inicio;