import React ,{useState,useEffect}from 'react'
import "./admin.css"
import { useNavigate } from 'react-router-dom';
import { productList,deleteProduct } from '../../Services/Adminapi';
import {toast} from "react-toastify"
function ProductList() {
    const [products, setProducts] = useState([]);
    const [productsLength, setProductsLength] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    
  useEffect(() => {
    const fetchProducts = async () => {
        try {
          const response = await productList();
          console.log('API response:', response);
          const data = response.data;
  
          if (data.status && Array.isArray(data.productList)) {
            setProducts(data.productList);
            setProductsLength(data.productList.length);
          } else {
            throw new Error('Data is not an array');
          }
        } catch (error) {
          console.error('Error fetching products:', error);
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchProducts();
    }, []);

    const handleEdit = (productId) => {
        navigate(`/admin/edit/${productId}`);
      };
    
      const handleDelete = async (productId) => {
        try {
          await deleteProduct(productId);
          const updatedProducts = products.filter(product => product._id !== productId);
          setProducts(updatedProducts);
          setProductsLength(updatedProducts.length);
          toast.success('Product deleted successfully');
        } catch (error) {
          console.error('Error deleting product:', error);
          toast.error('Failed to delete product');
        }
      };
  return (
    <>
    <div className='admin-product'>
    <h1 className='admin-product__title'>Product List</h1>
    <h3 className="totalProducts">Total Products: {productsLength}</h3>
    <table className='product-list-table'>
      <thead>
        <tr>
          <th>Items</th>
          <th>Product</th>
          <th>Name</th>
          <th>Description</th>
          <th>Category</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={product._id} className="product-list-row">
            <td>{index + 1}</td>
            <td><img src={product.image} alt={`product${index + 1}`} className="productlist-image" /></td>
            <td>{product.prod_name}</td>
            <td>{product.description}</td>
            <td>{product.category}</td>
            <td>₹{product.price}</td>
            <td>
              <button className='btn btn--edit' onClick={() => handleEdit(product._id)}>Edit</button>
              <button className='btn btn--delete' onClick={() => handleDelete(product._id)}>Delete</button>
              
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  </>
  )
}

export default ProductList