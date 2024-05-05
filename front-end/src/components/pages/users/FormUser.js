import React, { useState, useEffect } from 'react';
import { Button, Form, Col, Row, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addUser, getUserUnique } from '../../../redux/actions/actionUsers';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function FormUser({ showForm, id }) {
    const initialUserState = {
        IDUsuario: 0,
        Nombre: '',
        PrimerApellido: '',
        SegundoApellido: '',
        Genero: null,
        Correo: '',
        FechaNacimiento: '', 
        Telefono: '',
        IDRol: 0,
        NombreUsuario: '',
        Contraseña: '',
        ConfirmarContraseña: '',
        Habilitado: true
    };

    const dispatch = useDispatch();
    const [user, setUser] = useState({initialUserState});

    useEffect(() => {
        if (id > 0) {
            dispatch(getUserUnique(id))
                .then((response) => {
                    setUser(response.payload);
                });
        }
    }, [dispatch, id]);

    const handleCancel = () => {
        setUser(initialUserState);
        showForm();
    };

    const handleGuardar = () => {
        if(user.Contraseña === user.ConfirmarContraseña){
            dispatch(addUser(user)).then(() => {
                console.log('Usuario guardado');
            });
        }
    };

    return (
        <Col lg={6} xs={12} sm={8}>
            <Card>
                <Card.Header>
                    <h1>Registro de Usuario</h1>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col lg={5} sm={12} xl={6}>
                            <Form.Label>Nombre : </Form.Label>
                        </Col>
                        <Col lg={7} sm={12} xl={6}>
                            <Form.Control
                                type="text"
                                name="nombre"
                                value={user.Nombre}
                                onChange={(e) => setUser({ ...user, Nombre: e.target.value })}
                            />
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Col lg={5} sm={12} xl={6}>
                            <Form.Label>Primer Apellido : </Form.Label>
                        </Col>
                        <Col lg={7} sm={12} xl={6}>
                            <Form.Control
                                type="text"
                                name="primerApellido"
                                value={user.PrimerApellido}
                                onChange={(e) => setUser({ ...user, PrimerApellido: e.target.value })}
                            />
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Col lg={5} sm={12} xl={6}>
                            <Form.Label>Segundo Apellido : </Form.Label>
                        </Col>
                        <Col lg={7} sm={12} xl={6}>
                            <Form.Control
                                type="text"
                                name="segundoApellido"
                                value={user.SegundoApellido}
                                onChange={(e) => setUser({ ...user, SegundoApellido: e.target.value })}
                            />
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Col lg={5} sm={12} xl={6}>
                            <Form.Label>Genero: </Form.Label>
                        </Col>
                        <Col lg={7} sm={12} xl={6}>
                            <Form.Select 
                                    name="genero" 
                                    value={user.Genero} 
                                    onChange={(e) => setUser({...user, Genero: e.target.value == 1 ? true : false })}>
                                    <option value={""} disabled>Seleccione un Genero</option>
                                    <option value={1}>Masculino</option>
                                    <option value={2}>Femenino</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Col lg={5} sm={12} xl={6}>
                            <Form.Label>Fecha de Nacimiento: </Form.Label>
                        </Col>
                        <Col lg={7} sm={12} xl={6}>
                            <DatePicker
                                className='form-control'
                                selected={user.FechaNacimiento}
                                onChange={(date) => setUser({ ...user, FechaNacimiento: date })}
                            />
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Col lg={5} sm={12} xl={6}>
                            <Form.Label>Correo: </Form.Label>
                        </Col>
                        <Col lg={7} sm={12} xl={6}>
                            <Form.Control
                                type='text'
                                name="correo"
                                value={user.Correo}
                                onChange={(e) => setUser({ ...user, Correo: e.target.value })}
                            />
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Col lg={5} sm={12} xl={6}>
                            <Form.Label>Telefono: </Form.Label>
                        </Col>
                        <Col lg={7} sm={12} xl={6}>
                            <Form.Control
                                type='text'
                                name="telefono"
                                value={user.Telefono}
                                onChange={(e) => setUser({ ...user, Telefono: e.target.value })}
                            />
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Col lg={5} sm={12} xl={6}>
                            <Form.Label>Rol: </Form.Label>
                        </Col>
                        <Col lg={7} sm={12} xl={6}>
                            <Form.Select 
                                name="idRol" 
                                value={user.IDRol} 
                                onChange={(e) => setUser({ ...user, IDRol: parseInt(e.target.value) })}>
                                <option value={"0"} disabled>Seleccione un Rol</option>
                                <option value={"1"}>Administrador</option>
                                <option value={"2"}>Usuario</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Col lg={5} sm={12} xl={6}>
                            <Form.Label>Nombre de Usuario : </Form.Label>
                        </Col>
                        <Col lg={7} sm={12} xl={6}>
                            <Form.Control
                                type="text"
                                name="nombreUsuario"
                                value={user.NombreUsuario}
                                onChange={(e) => setUser({ ...user, NombreUsuario: e.target.value })}
                            />
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Col lg={5} sm={12} xl={6}>
                            <Form.Label>Contraseña : </Form.Label>
                        </Col>
                        <Col lg={7} sm={12} xl={6}>
                            <Form.Control
                                type="password"
                                name="contrasena"
                                value={user.Contraseña}
                                onChange={(e) => setUser({ ...user, Contraseña: e.target.value })}
                            />
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Col lg={5} sm={12} xl={6}>
                            <Form.Label>Confirmar Contraseña : </Form.Label>
                        </Col>
                        <Col lg={7} sm={12} xl={6}>
                            <Form.Control
                                type="password"
                                name="confirmarContrasena"
                                value={user.ConfirmarContraseña}
                                onChange={(e) => setUser({ ...user, ConfirmarContraseña: e.target.value })}
                            />
                        </Col>
                    </Row>
                    <br />
                </Card.Body>
                <Card.Footer>
                    <Button variant='danger' onClick={handleCancel} className='m-1'>Cancelar</Button>
                    <Button variant='primary' onClick={handleGuardar}>Guardar</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
}

export default FormUser;
