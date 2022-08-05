import type { NextPage } from "next";
import { Typography } from "@mui/material";

import { ShopLayout } from "../components/layouts";
import { ProductList } from "../components/products/ProductList";
import { useProducts } from "../hooks";

const HomePage: NextPage = () => {

  const {products, isLoading} = useProducts('/products');

  return (
    <ShopLayout
      title={"teslo-shop - Home"}
      pageDescription={"Encuentra los mejores productos de Teslo aqui"}
    >
      <Typography variant="h1" component="h1">
        Tienda
      </Typography>
      <Typography variant="h2" sx={{ marginBottom: 1 }}>
        Todos los productos
      </Typography>

      {
        isLoading
          ? <h1>Cargando</h1>
          : <ProductList products={products} />
      }

    </ShopLayout>
  );
};

export default HomePage;
