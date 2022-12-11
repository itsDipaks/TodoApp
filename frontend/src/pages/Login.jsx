import React from 'react'
import { useState } from 'react'
import { ApiSignup } from '../API/Api'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const Login = () => {
const [Logincred,setLogincred]=useState({})
  const handeldchange=(e)=>{

    
    const {name,value}=e.target

    setLogincred({
      ...Logincred,[name]:value
    })
  }
  const navigate=useNavigate()
  const handeldsubmite=async(e)=>{
    e.preventDefault()
    try{
      await axios.post("http://localhost:8700/auth/login",Logincred).then((res)=>{
      localStorage.setItem("token",res.data.token)
      })

      alert("Login Success")
      navigate("/")
    }catch(err){
      alert("Login Faild please try again ")
    }

    

  }
  return (
    <div>
      <form onSubmit={handeldsubmite}>
    <input type="text" name='email' placeholder='Enter Email' onChange={handeldchange}/>
    <input type="text" name='password' onChange={handeldchange} placeholder='Enter Password'/>
    <input type="submit"  value="Login"/>
    </form>
    </div>
  )
}

export default Login
