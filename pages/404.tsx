import { Box, Typography } from "@mui/material";
import { ShopLayout } from "../components/layouts/ShopLayout";
function Custom404() {
  return (
    <ShopLayout
      title="Page not found"
      pageDescription="No hay nada que mostrar aquí"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
        sx={{
          flexDirection:{
            xs: 'column',
            sm: 'row'
          }
        }}
      >
        <Typography variant="h1" component='h1' fontSize={70} fontWeight={150}>404 </Typography>
        <Typography marginLeft={1}>No encontramos ninguna página aquí</Typography>
      </Box>
    </ShopLayout>
  );
}

export default Custom404;
