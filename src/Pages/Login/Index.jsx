import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.css"

const Login = () => {
  return (
    <div className='input-container' >
      <div className="heading">
        <p>Login</p>
      </div>
      <div className="input-fields">
        <p className='text-input'>Email</p>
        <input type="email" />
        <p className='text-input'>Password</p>
        <input type="password" />
        <p className='forgot-text'>Forgot your password?</p>
        <div>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button sx={{ width: "35vw", color: "white", backgroundColor: "black", padding: "0.5rem 0", ":hover": { backgroundColor: "white", color: "black", },textDecoration: 'none' }} >Login</Button>
          </Link>
        </div>
        <Link to="/signup" >
          <span>Create an account</span>
        </Link>
      </div>
    </div>
  )
}

export default Login