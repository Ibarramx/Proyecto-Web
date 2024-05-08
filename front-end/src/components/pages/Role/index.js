import React, { useEffect, useState } from 'react';
import TableRole from './TableRole';
import { useDispatch } from 'react-redux';
import FromRole from './FormRole';

function Role() {
    const dispatch = useDispatch();
    const [showForm, setShowForm] = useState(false);
    const [idRoleEdit, setRoleEdit] = useState(0);

    const showTable = () => {
        setShowForm(prevShowForm => !prevShowForm); // Utilizando el estado anterior
        if(showForm){
            setRoleEdit(idRoleEdit);
        }
    };

    useEffect(() => {
        
    }, [dispatch, idRoleEdit]);

    return (
        showForm ? (
            <FromRole showForm={showTable} id={idRoleEdit}/>
        ) : (
            <TableRole showForm={showTable} idRoleEdit={id => setRoleEdit(id)}/>
        )
    );
}

export default Role;