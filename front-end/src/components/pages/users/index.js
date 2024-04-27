import React, { useState } from 'react';
import FormUser from './FormUser';
import TableUser from './TableUser';

function Usuarios() {
    const [showForm, setShowForm] = useState(false);
    const [idUserEdit, setUserEdit] = useState(0);
    const showTable = () => {
        setShowForm(prevShowForm => !prevShowForm); // Utilizando el estado anterior
    };
    function FunctionUserEdit(idUser){
        setUserEdit(idUser);
    }

    return (
        showForm ? (
            <FormUser showForm={showTable} idUserEdit={idUserEdit}/>
        ) : (
            <TableUser showForm={showTable} idUserEdit={(id) => FunctionUserEdit(id)}/>
        )
    );
}

export default Usuarios;