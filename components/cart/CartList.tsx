import NextLink from "next/link";
import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { initialData } from "../../database/products";
import { ItemCounter } from "../ui";
import { FC } from "react";

const prodcutsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface Props{
  isEditable?: boolean;
}

export const CartList:FC<Props> = ({isEditable = false}) => {
  return (
    <>
      {prodcutsInCart.map((product) => (
        <Grid container spacing={2} sx={{ mb: 1 }} key={product.slug}>
          <Grid item xs={3}>
            {/**TODO: LLevar a la pagina del producto */}
            <NextLink href={"/product/slug"} passHref>
              <Link>
                <CardActionArea>
                  <CardMedia
                    image={`/products/${product.images[0]}`}
                    component="img"
                    sx={{ borderRadius: "5px" }}
                  />
                </CardActionArea>
              </Link>
            </NextLink>
          </Grid>
          <Grid item xs={7}>
            <Box display="flex" flexDirection="column">
              <Typography variant="body1">{product.title}</Typography>
              <Typography variant="body1">
                Talla: <strong>M</strong>
              </Typography>

              {
                isEditable
                ? <ItemCounter />
                : <Typography variant="h6">Cantidad: 3</Typography>
              }
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Typography variant="subtitle1">${product.price}</Typography>

            {
              isEditable && (
                <Button variant="text" color="secondary">Eliminar</Button>
              )
            }

          </Grid>
        </Grid>
      ))}
    </>
  );
};
