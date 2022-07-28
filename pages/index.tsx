import type { NextPage } from "next";
import { Typography } from "@mui/material";

import { ShopLayout } from "../components/layouts";
import { initialData } from "../database/products";
import { ProductList } from "../components/products/ProductList";

const Home: NextPage = () => {
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

      <ProductList products={initialData.products as any} />
    </ShopLayout>
  );
};

export default Home;
