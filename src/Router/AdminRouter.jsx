import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminProductList from '../Pages/Admin/AdminProductList'
import AdminAddProduct from '../Pages/Admin/AdminAddProduct'
const AdminRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/productlist' element={<AdminProductList/>}/>
        <Route path='/addproduct' element={<AdminAddProduct/>}/>
      </Routes>
    </div>
  )
}

export default AdminRouter


