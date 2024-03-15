import { Button, Form, Col, Row } from 'react-bootstrap';

function PrimerFormulario( personaNombre ) {
    function Click(){
        console.log(personaNombre);
    }
    
    return(
        <Row>
            <Col>
                <Form.Label>Nombre : </Form.Label>
            </Col>
            <Col>
                <Form.Control type="text" value={personaNombre.personaNombre}></Form.Control>
            </Col>
            <Col>
                <Button onClick={Click()}>Guardar</Button>
            </Col>
        </Row>
    );
}

export default PrimerFormulario;