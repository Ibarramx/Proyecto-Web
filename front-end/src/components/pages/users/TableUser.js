import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  Grid,
  GridColumn as Column,
  getSelectedState,
  getSelectedStateFromKeyDown,
} from "@progress/kendo-react-grid";
import { getter } from "@progress/kendo-react-common";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from '../../../redux/actions/actionUsers';
import Swal from "sweetalert2";

const DATA_ITEM_KEY = "idUsuario";
const SELECTED_FIELD = "selected";
const idGetter = getter(DATA_ITEM_KEY);

function TableUser({ showForm, idUserEdit }) {
    const dispatch = useDispatch();
    const [selectedState, setSelectedState] = React.useState({});
    const { users } = useSelector((state) => state.getUsers);
    const [userSelected, setUserSelected] = React.useState(false);

    const onSelectionChange = (event) => {
        const newSelectedState = getSelectedState({
        event,
        selectedState: selectedState,
        dataItemKey: DATA_ITEM_KEY,
        });
        setSelectedState(newSelectedState);
        setUserSelected(true);
        idUserEdit(Object.keys(newSelectedState)[0]);
    };

    const onKeyDown = (event) => {
        const newSelectedState = getSelectedStateFromKeyDown({
        event,
        selectedState: selectedState,
        dataItemKey: DATA_ITEM_KEY,
        });
        setSelectedState(newSelectedState);
    };

    React.useEffect(() => {
        dispatch(getUsers());
        if(users){
            users.map((dataItem) =>
                Object.assign(
                {
                    selected: false,
                },
                dataItem
                )
            );
        }
    }, [dispatch]);

    const handleNew = () => {
        showForm();
        idUserEdit(0);
    };

    const handleEdit = () => {
        if(userSelected){
            showForm();
        }else{
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Seleccione un usuario para modificar",
              });
        }
    };

    const handleDelete = () => {
        if (userSelected) {
          // Eliminar usuario seleccionado
          const idUserDelete = Object.keys(selectedState)[0];
          dispatch(deleteUser(idUserDelete)).then(() => {
            Swal.fire({
              icon: "success",
              title: "Usuario eliminado",
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              dispatch(getUsers());
            });
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Seleccione un usuario para eliminar",
          });
          }
    };

    return (
        <>
            <Row className='m-1'>
                <Col>
                    <Button variant='primary' onClick={handleNew}>Nuevo Usuario</Button>
                </Col>
                <Col>
                    <Button variant='warning' onClick={handleEdit}>Modificar Usuario</Button>
                </Col>
                <Col>
                    <Button variant='danger' onClick={handleDelete}>Eliminar Usuario</Button>
                </Col>
            </Row>
            <Row className='m-1'>
                <Col className="d-flex justify-content-center">
                    <Grid
                        data={users ? (users.map((item) => ({
                        ...item,
                        [SELECTED_FIELD]: selectedState[idGetter(item)],
                        }))) : null }
                        dataItemKey={DATA_ITEM_KEY}
                        selectedField={SELECTED_FIELD}
                        selectable={{
                        enabled: true,
                        drag: true,
                        mode: "single",
                        }}
                        navigatable={true}
                        onSelectionChange={onSelectionChange}
                        onKeyDown={onKeyDown}
                    >
                            <Column field={SELECTED_FIELD} width="50px" filterable={false} />
                            <Column field="nombre" title="Nombre" width="120px" />
                            <Column field="primerApellido" title="Primer Apellido" width="170px" />
                            <Column field="segundoApellido" title="Segundo Apellido" width="170px" />
                            <Column field="nombreUsuario" title="Nombre de Usuario" width="160px" />
                            <Column field="telefono" title="Telefono" width="160px" />
                            <Column field="correo" title="Correo" width="160px" />
                            <Column field="habilitado" title="habilitado" width="100px" />
                    </Grid>
                </Col>
                
            </Row>
        </>
    );
}

export default TableUser;
