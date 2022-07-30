import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { ShopLayout } from "../../components/layouts/ShopLayout";
const AddressPage = () => {
  return (
    <ShopLayout
      title={"Dirección"}
      pageDescription={"Confirmar dirección de destino"}
    >
      <Typography variant="h1" component="h1">
        Direccion
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6}>
          <TextField label="Nombre" variant="outlined" size="small" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Apellido"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Dirección"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Dirección 2 (opcional)"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Código Postal"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Ciudad" variant="outlined" size="small" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="País"
            select
            variant="outlined"
            size="small"
            fullWidth
            value={1}
          >
            <MenuItem value={1}>Colombia</MenuItem>
            <MenuItem value={2}>Mexico</MenuItem>
            <MenuItem value={3}>Panama</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Telefono"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
      </Grid>

      <Box sx={{ mt: 5 }} display="flex" justifyContent="center">
        <Button color="secondary" size="large" className="circular-btn">
          Revisar pedido
        </Button>
      </Box>
    </ShopLayout>
  );
};

export default AddressPage;
