import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul style={{display:"flex",width:"50",margin:"auto" ,justifyContent:"space-evenly"}}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </div>
  )
}

export default Navbar