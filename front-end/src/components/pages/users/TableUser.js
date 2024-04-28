import React, { useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../redux/actions/actionUsers';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { GridHelper } from '../../common/kendo/GridHelper';

function TableUser({ showForm }) {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.getUsers);

    useEffect(() => {
        dispatch(getUsers());
    },[dispatch]);

    const onSelectedItemsChange = (ev) => {
        console.log(ev.selectedItems);
    };
    return (
    <>
        <Row className='m-1'>
            <Col>
                <Button variant='primary' onClick={showForm}>Nuevo Usuario</Button>
            </Col>
            <Col>
                <Button variant='warning' onClick={showForm}>Modificar Usuario</Button>
            </Col>
            <Col>
                <Button variant='danger' onClick={showForm}>Eliminar Usuario</Button>
            </Col>
        </Row>
        <Row className='m-1'>
            <GridHelper
                toolbarSettings={{
                pdfExportButton: true,
                excelExportButton: true,
                showFeaturesConfigurator: false,
                showColumnsConfigurator: false,
                }}
                initialDataState={{
                skip: 0,
                take: 10,
                }}
                filterable={false}
                onSelectedItemsChange={onSelectedItemsChange}
                dataItemKey={"idUsuario"}
                selectable={true}
                pageable={{
                buttonCount: 3,
                info: true,
                pageSizes: [5, 10, 50],
                }}
                data={users}
            >
                <Grid
                style={{
                    height: "520px",
                }}
                >
                <Column field={"selected"} width="50px" filterable={false} />
                <Column
                    field="nombre"
                    title="Nombre"
                />
                <Column field="primerApellido" title="Primer Apellido" width="340px" />
                <Column
                    field="primerApellido"
                    title="Primer Apellido"
                    width="180px"
                />
                <Column
                    field="segundoApellido"
                    title="Segundo Apellido"
                    width="180px"
                />
                <Column
                    field="nombreUsuario"
                    title="Nombre de Usuario"
                    width="160px"
                />
                </Grid>
            </GridHelper>
        </Row>
        
        </>
    );
}

export default TableUser;