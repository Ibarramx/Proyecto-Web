import React, { useEffect, useState } from 'react';
import FormUser from './FormUser';
import TableUser from './TableUser';
import { useDispatch } from 'react-redux';

function Usuarios() {
    const dispatch = useDispatch();
    const [showForm, setShowForm] = useState(false);
    const [idUserEdit, setUserEdit] = useState(0);
    const showTable = () => {
        setShowForm(prevShowForm => !prevShowForm); // Utilizando el estado anterior
    };
    useEffect(() => {
        console.log(idUserEdit)
    }, [dispatch, idUserEdit]);

    return (
        showForm ? (
            <FormUser showForm={showTable} idUserEdit={idUserEdit}/>
        ) : (
            <TableUser showForm={showTable} idUserEdit={id => setUserEdit(id)}/>
        )
    );
}

export default Usuarios;