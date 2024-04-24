import React, { useState } from 'react';
import FormUser from './FormUser';
import TableUser from './TableUser';

function Usuarios({ personaNombre }) {
    const [showForm, setShowForm] = useState(false);

    const showTable = () => {
        setShowForm(!showForm);
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