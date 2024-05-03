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
            alert('Seleccione un usuario para modificar');
        }
    };

    const handleDelete = () => {
        if (userSelected) {
          // Eliminar usuario seleccionado
          const idUserDelete = Object.keys(selectedState)[0];
          dispatch(deleteUser(idUserDelete));
        } else {
          alert("Seleccione un usuario para eliminar");
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
                <Grid
                    style={{
                    height: "400px",
                    }}
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
                        <Column field="nombre" title="Nombre" />
                        <Column field="primerApellido" title="Primer Apellido" width="340px" />
                        <Column field="segundoApellido" title="Segundo Apellido" width="180px" />
                        <Column field="nombreUsuario" title="Nombre de Usuario" width="160px" />
                </Grid>
            </Row>
        </>
    );
}

export default TableUser;
