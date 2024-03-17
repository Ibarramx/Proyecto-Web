import { Button, Form, Col, Row } from 'react-bootstrap';

function PrimerFormulario( personaNombre ) {    
    
    return(
        <Row>
            <Col>
                <Form.Label>Nombre : </Form.Label>
            </Col>
            <Col>
                <Form.Control type="text" value={personaNombre.personaNombre}></Form.Control>
            </Col>
            <Col>
                <Button>Guardar</Button>
            </Col>
        </Row>
    );
}

export default PrimerFormulario;