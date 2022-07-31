import type { NextPage } from "next";
import { Typography } from "@mui/material";

import { ShopLayout } from "../components/layouts";
// import { initialData } from "../database/products";
import { ProductList } from "../components/products/ProductList";

import useSWR from 'swr'
const fetcher = (...args:[key:string]) => fetch(...args).then((res) => res.json())

const HomePage: NextPage = () => {

  const { data, error } = useSWR('/api/products', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

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

      <ProductList products={data as any} />
    </ShopLayout>
  );
};

export default HomePage;
