import type { NextPage, GetServerSideProps } from "next";
import { Typography } from "@mui/material";

import { ShopLayout } from "../../components/layouts";
import { ProductList } from "../../components/products/ProductList";
import { dbProducts } from "../../database";
import { IProduct } from "../../interfaces";

interface Props {
  products: IProduct[];
  foundProducts: boolean;
  query: string;
}

const SearchPage: NextPage<Props> = ({ products, foundProducts, query }) => {
  return (
    <ShopLayout
      title={"teslo-shop - Home"}
      pageDescription={"Encuentra los mejores productos de Teslo aqui"}
    >
      <Typography variant="h1" component="h1">
        Buscar producto
      </Typography>
      {foundProducts ? (
        <Typography variant="h2" sx={{ marginBottom: 1 }}>
          {query}
        </Typography>
      ) : (
        <Typography variant="h2" sx={{ marginBottom: 1 }}>
          No encontre ningún producto relacionado con: <span>{query}</span>
        </Typography>
      )}

      <ProductList products={products} />
    </ShopLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query = "" } = params as { query: string };

  if (query.length === 0) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  let products = await dbProducts.getProductsByTerm(query);
  const foundProducts = products.length > 0;

  //TODO: Retornar otros productos cuando el query no encuentre nada, productos que te pueden gustar o algo asi
  if (!foundProducts) {
    products = await dbProducts.getAllProducts();
  }

  return {
    props: {
      products,
      foundProducts,
      query,
    },
  };
};

export default SearchPage;
