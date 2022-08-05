import { Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts/ShopLayout";
import { ProductList } from "../../components/products";
import { FullScreenLoader } from "../../components/ui";
import { useProducts } from "../../hooks";
const KidPage = () => {
  const { products, isLoading } = useProducts("/products?gender=kid");

  return (
    <ShopLayout
      title={"Tienda Niños"}
      pageDescription={"Productos de niños en Teslo Shop"}
    >
      <Typography variant="h1" component="h1">
        Niños
      </Typography>
      <Typography variant="h2" sx={{ marginBottom: 1 }}>
        Todos los productos
      </Typography>

      {isLoading ? <FullScreenLoader /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default KidPage;
