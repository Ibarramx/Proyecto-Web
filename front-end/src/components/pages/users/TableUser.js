import React from 'react';
import { Button, Col } from 'react-bootstrap';

function TableUser({ showForm }) {
    // function ShowFormulario(){
    //     showForm();
    // }
    return (
        <Col>
            <Button variant='primary' onClick={showForm}>Nuevo Usuario</Button>
        </Col>
    );
}

export default TableUser;
