import React, { useEffect } from 'react'
import Navbar from "../components/Navbar"
import { Grid, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { Container } from '@mui/material';
import { useDispatch } from "react-redux"
import { getProductsData } from '../features/productSlice';
import loadingImage from "../assets/loading.gif"
import errorImage from "../assets/error.gif"

const Product = () => {
  const dispatch = useDispatch()
  const { productsData, loading, error } = useSelector(state => state.products)

  useEffect(() => {

    dispatch(getProductsData())
  }, []);
  return (
    <div>
      <Container>
        <Typography
          variant="h3"
          component="h1"
          align="center"
          color="text.primary"
          mt={3}>
          Products
        </Typography>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          mt={5}>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Product