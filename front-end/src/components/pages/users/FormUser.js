import React from 'react';
import { Button, Form, Col, Row, Card } from 'react-bootstrap';
// import { useDispatch } from 'react-redux';
// import { getUserUnique } from '../../../redux/actions/actionUsers';

function FormUser({ showForm }) {// Valores iniciales del formulario
    
    // const dispatch = useDispatch();
    // const [userEdit, setUserEdit] = useState(null);
  

    // useEffect(() => {
    //     if(idUserEdit > 0){
    //         dispatch(getUserUnique(idUserEdit))
    //             .then((response) => {
    //                 setUserEdit(response);
    //             });
    //     }
    // },[dispatch, idUserEdit])

    return(
        <Col lg={8} xs={12} sm={8}>
            <Card>
                <Card.Header>
                    <h1>Registro de Usuario</h1>
                </Card.Header>
                <Card.Body> 
                    <Row>    
                        <Col lg={6} sm={12} xl={6}>
                            <Form.Label>Nombre : </Form.Label>
                        </Col>
                        <Col lg={6} sm={12} xl={6}>
                            <Form.Control type="text"></Form.Control>
                        </Col>
                    </Row>
                    <br/>

                    <Row>
                        <Col lg={6} sm={12} xl={6}>
                            <Form.Label>Primer Apellido : </Form.Label>
                        </Col>
                        <Col lg={6} sm={12} xl={6}>
                            <Form.Control type="text"></Form.Control>
                        </Col>
                    </Row>
                    <br/>

                    <Row>
                        <Col lg={6} sm={12} xl={6}>
                            <Form.Label>Segundo Apellido : </Form.Label>
                        </Col>
                        <Col lg={6} sm={12} xl={6}>
                            <Form.Control type="text"></Form.Control>
                        </Col>
                    </Row>
                    <br/>
                    
                    <Row>
                        <Col lg={6} sm={12} xl={6}>
                            <Form.Label>Telefono: </Form.Label>
                        </Col>
                        <Col lg={6} sm={12} xl={6}>
                            <Form.Control type='text'></Form.Control>
                        </Col>
                    </Row>
                    <br/>

                    <Row>
                        <Col lg={6} sm={12} xl={6}>
                            <Form.Label>Correo: </Form.Label>
                        </Col>
                        <Col lg={6} sm={12} xl={6}>
                            <Form.Control type='text'></Form.Control>
                        </Col>
                    </Row>
                    <br/>

                    <Row>
                        <Col lg={6} sm={12} xl={6}>
                            <Form.Label>Rol: </Form.Label>
                        </Col>
                        <Col lg={6} sm={12} xl={6}>
                            <Form.Control type='select'></Form.Control>
                        </Col>
                    </Row>
                    <br/>
                    
                    <Row>
                        <Col lg={6} sm={12} xl={6}>
                            <Form.Label>Nombre de Usuario : </Form.Label>
                        </Col>
                        <Col lg={6} sm={12} xl={6}>
                            <Form.Control type="text"></Form.Control>
                            
                        </Col>
                    </Row>
                    <br/>

                    <Row>
                        <Col lg={6} sm={12} xl={6}>
                            <Form.Label>Contraseña : </Form.Label>
                        </Col>
                        <Col lg={6} sm={12} xl={6}>                    
                            <Form.Control type="password"></Form.Control>
                        </Col>
                    </Row>
                    <br/>
                    
                    <Row>
                        <Col lg={6} sm={12} xl={6}>
                            <Form.Label>Confirmar Contraseña : </Form.Label>
                        </Col>
                        <Col lg={6} sm={12} xl={6}>
                            <Form.Control type="password"></Form.Control>
                        </Col>
                    </Row>
                    <br/>
                </Card.Body>
                <Card.Footer>
                    <Button variant='danger' onClick={showForm} className='m-1'>Cancelar</Button>
                    <Button variant='primary'>Guardar</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
}
export default FormUser;