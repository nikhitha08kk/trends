import React from 'react'
import{Routes,Route} from "react-router-dom"
import UserHome from '../Pages/User/UserHome'
import UserwishList from '../Pages/User/UserwishList'
import UserCart from '../Pages/User/UserCart'

function UserRouter() {
  return (
   <Routes>

<Route path='/' element={<UserHome/>}/>
<Route path='/wishlist' element={< UserwishList/>}/> 
<Route path='/cart' element={< UserCart/>}/>

   </Routes>
  )
}

export default UserRouter