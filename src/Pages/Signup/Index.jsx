import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { UserSignUp } from "../../Store/DataContext"
import React, { useRef, useState } from 'react'

const Signup = () => {


  const emailRef = useRef()
  const passwordRef = useRef()
  const firstnameRef = useRef()
  const lastnameRef = useRef()

  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)

  const HandleSignUp = () => {
    setLoading(true)
    if (!emailRef.current.value || !passwordRef.current.value || !firstnameRef.current.value || !lastnameRef.current.value) {
      alert("Please Fill All Input Fields")
    }
    else {
      UserSignUp(emailRef.current.value, passwordRef.current.value)
        .then(() => {
          navigate("/logout")
        })
        .catch((err) => {
          alert("Email is already in Use")
        })
    }
    setLoading(false)
  }


  return (
    <div className='input-container' >
      <div className="heading">
        <p>Create Account</p>
      </div>
      <div className="input-fields">
        <p className='text-input'>First Name</p>
        <input type="text" placeholder='Enter first name' ref={firstnameRef} />
        <p className='text-input'>Last Name</p>
        <input type="text" placeholder='Enter last name' ref={lastnameRef} />
        <p className='text-input'>Email</p>
        <input type="email" placeholder='Enter Email' ref={emailRef} />
        <p className='text-input'>Password</p>
        <input type="password" placeholder='Enter Password' ref={passwordRef} />
        <div>
          {/* <Link to="/login" style={{ textDecoration: 'none' }}> */}
          <Button onClick={HandleSignUp} disabled={loading} sx={{ width: "35vw", color: "white", backgroundColor: "black", padding: "0.5rem 0", ":hover": { backgroundColor: "white", color: "black" }, marginTop: "32px" }} >SignUp</Button>
          {/* </Link> */}
        </div>
        <div style={{ display: "flex", marginTop: "1.5rem" }}>
          <p style={{ display: "flex", margin: "10px" }}>Returning Customer ?
            <Link to="/login" >
              <span style={{ display: "flex", padding: "0", margin: "0px 10px", textDecoration: "underline", color: "black" }}>Sign In</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup