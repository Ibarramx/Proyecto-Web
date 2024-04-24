import React, { useState } from 'react';
import FormularioUsuario from './FormularioUsuario';
import TablaUsuario from './TablaUsuario';

function Usuarios({ personaNombre }) {
    const [mostrarForm, setMostrarForm] = useState(false);

    const mostrarTabla = () => {
        setMostrarForm(!mostrarForm);
    };

    return (
        mostrarForm ? (
            <FormularioUsuario mostrarFormulario={mostrarTabla} />
        ) : (
            <TablaUsuario mostrarFormulario={mostrarTabla} />
        )
    );
}

export default Usuarios;