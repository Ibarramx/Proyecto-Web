import * as React from "react";
import {
  Grid,
  GridColumn as Column,
  getSelectedState,
  getSelectedStateFromKeyDown,
} from "@progress/kendo-react-grid";
import { getter } from "@progress/kendo-react-common";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { deleteRole, getRoles } from "../../../redux/actions/actionRoles";

const DATA_ITEM_KEY = "idRole";
const SELECTED_FIELD = "selected";
const idGetter = getter(DATA_ITEM_KEY);

function TableRole({ showForm, idRoleEdit }) {
    const dispatch = useDispatch();
    const [selectedState, setSelectedState] = React.useState({});
    const { roles } = useSelector((state) => state.getUsers);
    const [roleSelected, setRoleSelected] = React.useState(false);

    const onSelectionChange = (event) => {
        const newSelectedState = getSelectedState({
        event,
        selectedState: selectedState,
        dataItemKey: DATA_ITEM_KEY,
        });
        setSelectedState(newSelectedState);
        setRoleSelected(true);
        idRoleEdit(Object.keys(newSelectedState)[0]);
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
        dispatch(getRoles());
        if(roles){
            roles.map((dataItem) =>
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
        idRoleEdit(0);
    };

    const handleEdit = () => {
        if(roleSelected){
            showForm();
        }else{
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Seleccione un rol para modificar",
              });
        }
    };

    const handleDelete = () => {
        if (roleSelected) {
          // Eliminar usuario seleccionado
          const idRoleDelete = Object.keys(selectedState)[0];
          dispatch(deleteRole(idRoleDelete)).then(() => {
            Swal.fire({
              icon: "success",
              title: "Rol eliminado",
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              dispatch(getRoles());
            });
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Seleccione un rol para eliminar",
          });
          }
    };

    return (
        <>
            <Row className='m-1'>
                <Col>
                    <Button variant='primary' onClick={handleNew}>Nuevo Rol</Button>
                </Col>
                <Col>
                    <Button variant='warning' onClick={handleEdit}>Modificar Rol</Button>
                </Col>
                <Col>
                    <Button variant='danger' onClick={handleDelete}>Eliminar Rol</Button>
                </Col>
            </Row>
            <Row className='m-1'>
                <Col className="d-flex justify-content-center">
                    <Grid
                        data={roles ? (roles.map((item) => ({
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
                            <Column field="descripcion" title="Descripcion" width="120px" />
                            <Column field="fechaCreado" title="Fecha Creado" width="170px" />
                            <Column field="fechaModificado" title="Fecha Modificado" width="170px" />
                            <Column field="habilitado" title="habilitado" width="100px" />
                    </Grid>
                </Col>
                
            </Row>
        </>
    );
}

export default TableRole;
