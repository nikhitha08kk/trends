import React from 'react'
import "./ProductPage.css"
import ProductCard from '../ProductCard/ProductCard'
import { Grid2 } from '@mui/material';

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is a great product!',
    price: 29.99,
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This product is even better!',
    price: 49.99,
    image: 'https://via.placeholder.com/200',
  },
  // Add more products as needed
];
const ProductPage = () => {



  return (
     <>
     <h1>PRODUCTS</h1>
     <Grid2 container spacing={4}>
      
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />

      ))}
     
    </Grid2>
    <div>next</div>
    </>
  
  
  )
}

export default ProductPage
