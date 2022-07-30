import NextLink from 'next/link';

import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../../components/layouts";

const RegisterPage = () => {
  return (
    <AuthLayout title={"Ingresar"}>
      <Box sx={{ width: 350, padding: "10px 20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h1" component="h1">
              Registrarse
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField label="Nombre" fullWidth variant="outlined"/>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Correo" fullWidth variant="outlined"/>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Contraseña" fullWidth variant="outlined" type="password"/>
          </Grid>
          <Grid item xs={12}>
            <Button color="secondary" className="circular-btn" size="large" fullWidth>Registrarse</Button>
          </Grid>

          <Grid item xs={12} display="flex" justifyContent="center">
            <NextLink  href='/auth/login' passHref>
              <Link underline='always'>ya tienes cuenta? Ingresa</Link>
            </NextLink>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
};

export default RegisterPage;
