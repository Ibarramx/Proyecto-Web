import React, { useState, useEffect } from 'react';
import { Button, Form, Col, Row, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getUserUnique } from '../../../redux/actions/actionUsers';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function FormUser({ showForm, id }) {
    const initialUserState = {
        nombre: '',
        primerApellido: '',
        segundoApellido: '',
        genero: '',
        correo: '',
        fechaNacimiento: new Date(), // Puedes inicializar la fecha a la actual o alguna otra
        telefono: '',
        idRol: '0', // Se inicializa como string para que coincida con el valor de las opciones
        nombreUsuario: '',
        contrasena: '',
        confirmarContrasena: ''
    };

    const dispatch = useDispatch();
    const [user, setUser] = useState(initialUserState);

    useEffect(() => {
        if (id > 0) {
            dispatch(getUserUnique(id))
                .then((response) => {
                    setUser(response.payload);
                });
        } else {
            setUser(initialUserState);
        }
    }, [dispatch, id, initialUserState]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleDateChange = (date) => {
        setUser(prevState => ({
            ...prevState,
            fechaNacimiento: date
        }));
    };

    const handleCancel = () => {
        setUser(initialUserState);
        showForm();
    };

    const handleGuardar = () => {
        // Aquí deberías realizar las acciones necesarias para guardar el usuario
        console.log(user);
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
                                value={user.nombre}
                                onChange={handleChange}
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
                                value={user.primerApellido}
                                onChange={handleChange}
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
                                value={user.segundoApellido}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Col lg={5} sm={12} xl={6}>
                            <Form.Label>Genero: </Form.Label>
                        </Col>
                        <Col lg={7} sm={12} xl={6}>
                            <Form.Control
                                type='text'
                                name="genero"
                                value={user.genero}
                                onChange={handleChange}
                            />
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
                                selected={user.fechaNacimiento}
                                onChange={handleDateChange}
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
                                value={user.correo}
                                onChange={handleChange}
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
                                value={user.telefono}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Col lg={5} sm={12} xl={6}>
                            <Form.Label>Rol: </Form.Label>
                        </Col>
                        <Col lg={7} sm={12} xl={6}>
                            <Form.Select name="idRol" value={user.idRol} onChange={handleChange}>
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
                                value={user.nombreUsuario}
                                onChange={handleChange}
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
                                value={user.contrasena}
                                onChange={handleChange}
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
                                value={user.confirmarContrasena}
                                onChange={handleChange}
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