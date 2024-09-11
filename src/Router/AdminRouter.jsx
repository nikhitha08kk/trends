import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminProductList from '../Pages/Admin/AdminProductList'
const AdminRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/productlist' element={<AdminProductList/>}/>
      </Routes>
    </div>
  )
}

export default AdminRouter


