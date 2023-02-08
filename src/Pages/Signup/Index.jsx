import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='input-container' >
      <div className="heading">
        <p>Create Account</p>
      </div>
      <div className="input-fields">
        <p className='text-input'>First Name</p>
        <input type="text" />
        <p className='text-input'>Last Name</p>
        <input type="text" />
        <p className='text-input'>Email</p>
        <input type="email" />
        <p className='text-input'>Password</p>
        <input type="password" />
        <div>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button sx={{ width: "35vw", color: "white", backgroundColor: "black", padding: "0.5rem 0", ":hover": { backgroundColor: "white", color: "black" }, marginTop: "32px" }} >SignUp</Button>
          </Link>
        </div>
        <div style={{ display: "flex", marginTop: "1.5rem" }}>
          <p style={{ display: "flex", margin: "10px" }}>Returning Customer ?
            <Link to="/login" >
              <p style={{ display: "flex", margin: "0px 10px", textDecoration: "underline", color: "black" }}>Sign In</p>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup