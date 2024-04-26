import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col } from 'react-bootstrap';

function TableUser({ showForm }) {
    const [dataUsers, setDataUsers] = useState([]);

    useEffect(() => {
        axios.get("http://187.189.158.186:7777/Usuario")
        .then(response =>{
            setDataUsers(response.data);
            console.log(dataUsers);
        }).catch(error =>{
            console.log("Error: " + error);
        });
    })
    return (
        <Col>
            <Button variant='primary' onClick={showForm}>Nuevo Usuario</Button>
        </Col>
    );
}

export default TableUser;
