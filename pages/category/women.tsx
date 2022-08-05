import { Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts/ShopLayout";
import { ProductList } from "../../components/products";
import { FullScreenLoader } from "../../components/ui";
import { useProducts } from "../../hooks";
const WomenPage = () => {
  const { products, isLoading } = useProducts("/products?gender=women");

  return (
    <ShopLayout
      title={"Tienda Mujeres"}
      pageDescription={"Productos de mujeres en Teslo Shop"}
    >
      <Typography variant="h1" component="h1">
        Mujeres
      </Typography>
      <Typography variant="h2" sx={{ marginBottom: 1 }}>
        Todos los productos
      </Typography>

      {isLoading ? <FullScreenLoader /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default WomenPage;
