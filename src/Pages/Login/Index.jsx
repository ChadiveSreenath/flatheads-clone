import { Button } from '@mui/material'
import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./styles.css"
import { userLogin } from "../../Store/DataContext"

const Login = () => {

  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()


  const handleLogin = () => {
    userLogin(emailRef.current.value, passwordRef.current.value)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        alert("Please login with correct credentials")
      })
  }



  return (
    <div className='input-container' >
      <div className="heading">
        <p>Login</p>
      </div>
      <div className="input-fields">
        <p className='text-input'>Email</p>
        <input type="email" ref={emailRef} />
        <p className='text-input'>Password</p>
        <input type="password" ref={passwordRef} />
        <p className='forgot-text'>Forgot your password?</p>
        <div>
          <Button onClick={handleLogin} sx={{ width: "35vw", color: "white", backgroundColor: "black", padding: "0.5rem 0", ":hover": { backgroundColor: "white", color: "black", }, textDecoration: 'none' }} >Login</Button>
        </div>
        <Link to="/signup" >
          <span>Create an account</span>
        </Link>
      </div>
    </div>
  )
}

export default Login