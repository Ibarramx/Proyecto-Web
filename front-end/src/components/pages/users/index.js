import React, { useState } from 'react';
import FormUser from './FormUser';
import TableUser from './TableUser';

function Usuarios() {
    const [showForm, setShowForm] = useState(false);

    const showTable = () => {
        setShowForm(prevShowForm => !prevShowForm); // Utilizando el estado anterior
    };

    return (
        showForm ? (
            <FormUser showForm={showTable} />
        ) : (
            <TableUser showForm={showTable} />
        )
    );
}

export default Usuarios;