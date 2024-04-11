import React from 'react';
import { Button } from 'react-bootstrap';

function TablaUsuario({ mostrarFormulario }) {
    return (
        <Button variant='primary' onClick={mostrarFormulario}>Nuevo Usuario</Button>
    );
}

export default TablaUsuario;
