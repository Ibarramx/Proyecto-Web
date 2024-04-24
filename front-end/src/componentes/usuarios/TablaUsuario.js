import { Button } from 'react-bootstrap';
import * as React from "react";
import Usuarios from "./usuarios.json";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { GridHelper } from "./GridHelper";

function TablaUsuario({ mostrarFormulario }) {
    const onSelectedItemsChange = (ev) => {
        console.log(ev.selectedItems);
    };

    return (
        <>
        <Button variant='primary' onClick={console.log(Usuarios)}>Nuevo Usuario</Button>
        <GridHelper
        toolbarSettings={{
          filterHighlights: true,
          expandCollapseAllButton: true,
          pdfExportButton: true,
          excelExportButton: true,
          externalFilter: true,
          showFeaturesConfigurator: true,
          showColumnsConfigurator: true,
        }}
        initialDataState={{
          skip: 0,
          take: 10,
          sort: [
            {
              field: "Nombre",
              dir: "desc",
            },
          ],
        }}
        onSelectedItemsChange={onSelectedItemsChange}
        filterable={true}
        dataItemKey={"id"}
        selectable={true}
        groupable={true}
        sortable={true}
        pageable={{
          buttonCount: 3,
          info: true,
          pageSizes: [5, 10, 50],
        }}
        data={Usuarios}
      >
        <Grid
          style={{
            height: "520px",
          }}
        >
          <Column field={"selected"} width="50px" filterable={false} />
          <Column field="Nombre" title="Nombre" width="340px" />
          <Column
            field="PrimerApellido"
            title="Primer Apellido"
            width="180px"
          />
          <Column
            field="SegundoApellido"
            title="Segundo Apellido"
            width="180px"
          />
          <Column
            field="NombredeUsuario"
            title="Nombre de Usuario"
            width="160px"
          />
          <Column field="Correo" title="Correo" width="180px" />
          <Column field="Telefono" title="Telefono" width="180px" />
        </Grid>
      </GridHelper>
        </>
    );
}

export default TablaUsuario;
