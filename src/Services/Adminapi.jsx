import { adminInstance } from "../Axios/Axiosinstance";

export const Products = (value) => {
    return adminInstance.post("/add", {...value});
  }
export const productList = () => {
    return adminInstance.get('/product');
  };
  export const deleteProduct=(productId)=>{
    return adminInstance.delete(`/product/${productId}`)
  }