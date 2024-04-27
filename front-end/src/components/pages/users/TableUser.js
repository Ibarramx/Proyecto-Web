import React, { useEffect } from 'react';
import { Button, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../redux/actions/actionUsers';

function TableUser({ showForm }, idUser) {
    const dispatch = useDispatch();
    const { usuarios } = useSelector((state) => state.getUsers);

    useEffect(() => {
        dispatch(getUsers());
    },[dispatch]);
    function ExtraerUsuario(){
        //Aqui la logica de la tabla
    }

    return (
        <Col>
            <Button variant='primary' onClick={showForm}>Nuevo Usuario</Button>
        </Col>
    );
}

export default TableUser;