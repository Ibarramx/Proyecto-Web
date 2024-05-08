import React, { useState, useEffect } from 'react';
import { Button, Form, Col, Row, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';
import { addRole, getRoleUnique } from '../../../redux/actions/actionRoles';

function FormUser({ showForm, id }) {
    const initialUserState = {
        IDRol: 0,
        Descripcion: '',
        Habilitado: true
    };

    const dispatch = useDispatch();
    const [role, setRole] = useState({initialUserState});

    useEffect(() => {
        if (id > 0) {
            dispatch(getRoleUnique(id))
                .then((response) => {
                    setRole(response.payload);
                });
        }
    }, [dispatch, id]);

    const handleCancel = () => {
        setRole(initialUserState);
        showForm();
    };

    const handleGuardar = () => {
        dispatch(addRole(role)).then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Rol guardado correctamente',
                showConfirmButton: false,
                timer: 1500
            });
        });
    };

    return (
        <Col lg={6} xs={12} sm={8}>
            <Card>
                <Card.Header>
                    <h1>Registro de Rol</h1>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col lg={5} sm={12} xl={6}>
                            <Form.Label>Descripcion : </Form.Label>
                        </Col>
                        <Col lg={7} sm={12} xl={6}>
                            <Form.Control
                                type="text"
                                name="Descripcion"
                                value={role.Descripcion}
                                onChange={(e) => setRole({ ...role, Descripcion: e.target.value })}
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
