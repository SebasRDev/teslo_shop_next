import type { NextPage, GetServerSideProps } from "next";
import { Typography } from "@mui/material";

import { ShopLayout } from "../../components/layouts";
import { ProductList } from "../../components/products/ProductList";
import { dbProducts } from "../../database";
import { IProduct } from "../../interfaces";

interface Props{
  products: IProduct[];
}
 
const SearchPage: NextPage<Props> = ({products}) => {

  return (
    <ShopLayout
      title={"teslo-shop - Home"}
      pageDescription={"Encuentra los mejores productos de Teslo aqui"}
    >
      <Typography variant="h1" component="h1">
        Buscar producto
      </Typography>
      <Typography variant="h2" sx={{ marginBottom: 1 }}>
        ABC --- 123
      </Typography>
 
      <ProductList products={products} />
    </ShopLayout>
  );
};


export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const {query = ''} = params as {query:string};

  if(query.length === 0){
    return{
      redirect: {
        destination: '/',
        permanent: true
      }
    }
  }

  let products = await dbProducts.getProductsByTerm(query);
  //TODO: Retornar otros productos cuando el query no encuentre nada, productos que te pueden gustar o algo asi

  return {
    props: {
      products
    }
  }
}

export default SearchPage;
