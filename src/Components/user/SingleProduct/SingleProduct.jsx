import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

// Mock product data (ideally this comes from a server or context)
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

const SingleProduct = () => {
  // Get the product ID from the URL
  const { id } = useParams();
  
  // Find the product that matches the ID from the URL
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <Typography variant="h4">Product not found!</Typography>;
  }

  return (
    <Container>
      <Card>
        {/* Product Image */}
        <CardMedia
          component="img"
          alt={product.name}
          height="400"
          image={product.image || 'https://via.placeholder.com/400'}
        />
        {/* Product Details */}
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {product.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="h5" color="text.primary">
            ${product.price}
          </Typography>
        </CardContent>
        <Button size="large" color="primary">
          Add to Cart
        </Button>
        <Button size="large" color="primary">
          WishList
        </Button>
      </Card>
    </Container>
  );
};

export default SingleProduct;


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';  // Use axios or fetch for API requests
// import { Container, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

// const SingleProduct = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(`/api/products/${id}`);
//         setProduct(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching the product:', error);
//         setLoading(false);
//       }
//     };
//     fetchProduct();
//   }, [id]);

//   if (loading) {
//     return <Typography variant="h4">Loading...</Typography>;
//   }

//   if (!product) {
//     return <Typography variant="h4">Product not found!</Typography>;
//   }

//   return (
//     <Container>
//       <Card>
//         <CardMedia
//           component="img"
//           alt={product.name}
//           height="400"
//           image={product.image || 'https://via.placeholder.com/400'}
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h4" component="div">
//             {product.name}
//           </Typography>
//           <Typography variant="body1" color="text.secondary">
//             {product.description}
//           </Typography>
//           <Typography variant="h5" color="text.primary">
//             ${product.price}
//           </Typography>
//         </CardContent>
//         <Button size="large" color="primary">
//           Add to Cart
//         </Button>
//       </Card>
//     </Container>
//   );
// };

// export default SingleProduct;

