import React from 'react'
import "./ProductCard.css"
import { Card, CardMedia, CardContent, CardActions, Typography, Button,Grid2 } from '@mui/material';
const ProductCard = ({product}) => {
  return (
    <Grid2 item xs={12} sm={6} md={4} lg={3}>
    <Card>
      {/* Product Image */}
      <CardMedia
        component="img"
        alt={product.name}
        height="200"
        image={product.image}
      />
     {/* Product Details */}
     <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="h6" color="text.primary">
            ${product.price}
          </Typography>
        </CardContent>
         {/* Action Buttons */}
         <CardActions>
          <Button size="small" color="primary">
            Add to Cart
          </Button>
          <Button size="small" color="secondary">
            View Details
          </Button>
        </CardActions>
      </Card>
    </Grid2>
  )
}

export default ProductCard
