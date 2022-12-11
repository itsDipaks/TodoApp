import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Login from "../pages/Login"
import Signup from "../pages/Signup"




const AllRoutes = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>

      
      </Routes>
    </div>
  )
}

export default AllRoutes