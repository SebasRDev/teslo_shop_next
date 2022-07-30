import NextLink from 'next/link';
import { ShopLayout } from "../../components/layouts";

import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { Chip, Grid, Link, Typography } from "@mui/material";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "fullname", headerName: "Nombre", width: 300 },
  {
    field: "paid",
    headerName: "Pagada",
    description: "Muestra informacion si está pagada",
    width: 150,
    renderCell: (params: GridValueGetterParams) => {
      return params.row.paid ? (
        <Chip color="success" label="Pagada" variant="outlined" />
      ) : (
        <Chip color="error" label="No pagada" variant="outlined" />
      );
    },
  },
  {
    field: 'order',
    headerName: 'Ver Orden',
    description: 'Link para ir a la orden',
    width: 150,
    renderCell: (params:GridValueGetterParams) => {
      return (<NextLink href={`/orders/${params.row.id}`} passHref><Link underline='always'>Ver Orden</Link></NextLink>)
    }
  }
];

const rows = [
  { id: 1, fullname: "Sebastian Ramirez", paid: true, },
  { id: 2, fullname: "Nicolas Ramirez", paid: true,},
  { id: 3, fullname: "Jhan Ramirez", paid: false,},
  { id: 4, fullname: "Yaneth Ramirez", paid: true,},
];

const HistoryPage = () => {
  return (
    <ShopLayout
      title={"Historial de ordenes"}
      pageDescription={"Historial de ordenes del cliente"}
    >
      <Typography variant="h1" component="h1">
        Historial de ordenes
      </Typography>

      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default HistoryPage;
