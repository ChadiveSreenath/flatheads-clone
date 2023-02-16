import React, { useContext, useRef, useState } from 'react'
import "./styles.css"
import Logo from "../../Assets/flatheads-logo.webp"
import { Button, TextField } from '@mui/material'
import styled from 'styled-components';
import { CartDataContext, UserAuth } from '../../Store/DataContext';
import { Link } from 'react-router-dom';
import BasicModal from './Components/Modal';
import { emptyCart } from '../../utils/helpers';
import { db } from '../../Firebase';
import { doc } from '@firebase/firestore';



const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'black',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
      height: '3rem',
      width: "33vw"
    },
    '&:hover fieldset': {
      borderColor: 'black',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    }
  },
});


const CheckOut = () => {

  const [open, setOpen] = useState(false)
  const onClose = () => {
    setOpen(false)
    window.location.href = '/'
  }
  const currentUser = UserAuth()
  const { cartData: data, subTotalPrice } = useContext(CartDataContext)
  const itemRef = doc(db, "users", `${currentUser?.email}`)

  const CountryRef = useRef()
  const NameRef = useRef()
  const CityRef = useRef()
  const StateRef = useRef()
  const PincodeRef = useRef()
  const MobileRef = useRef()


  const handleCheckout = (event) => {
    event.preventDefault()
    if (!data.length) {
      alert('Your cart is empty, please add items to cart')
      return window.location.href = '/products'
    }
    setOpen(true)
    emptyCart(itemRef)
  }

  return (
    <div className="checkout-container">
      <div className="details-container">
        <div className="logo-wrapper">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <form action="" onSubmit={handleCheckout}>
          <div className="contact-information" >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "34.5vw" }}>
              <p className='heading-info'>Contact Information</p>
              {/* <p style={{ fontSize: "0.75rem" }} > Already have an account?
                <Link to="/login" style={{ textDecoration: "none" }}>
                  Log in
                </Link>
              </p> */}
            </div>
            <div>
              <CssTextField label="Email" required />
            </div>
            <div>
              <span style={{ fontSize: "0.85rem", display: "flex", margin: "0" }}>
                <input type="checkbox" />
                <p>Email me with news and offers</p>
              </span>
            </div>
          </div>
          <div className="shipping-address">
            <p className='heading-info'>Shipping address</p>
            <div>
              <CssTextField required={true} ref={CountryRef} label='Enter Country/region' />
            </div>
            <div>
              <CssTextField required={true} ref={NameRef} label='Enter your name' />
            </div>
            <div>
              <CssTextField label="Apartment, suite, etc. (optional)" />
            </div>
            <div>
              <CssTextField required={true} ref={CityRef} label='City' />
            </div>
            <div>
              <CssTextField required={true} ref={StateRef} label='State' />
            </div>
            <div>
              <CssTextField required={true} ref={PincodeRef} label='PinCode' />
            </div>
            <div>
              <CssTextField required={true} ref={MobileRef} label="Enter Mobile Number" />
            </div>
            <span style={{ fontSize: "0.85rem", display: "flex", margin: "0" }}>
              <input type="checkbox" />
              <p>Save this information for next time</p>
            </span>
          </div>
          <div className="footer-wrapper">
            <Link to="/Cart" style={{ textDecoration: "none", cursor: "pointer", color: "#404040" }}>
              <p className='return-cart'> Return to Cart</p>
            </Link>
            <Button type="submit" variant="contained" style={{ color: "white", fontSize: "12px", padding: "1rem" }}>Continue to shipping</Button>
          </div>
        </form>
      </div>
      <div className="summary-container">
        <div className="item-summary">
          {
            data?.map((item, i) => (
              <div className='cart-item-wrapper' key={i}>
                <div>
                  <img src={item?.product?.img} alt="" style={{ objectFit: 'contain', width: '20%', marginRight: "10px" }} />
                  <p style={{ fontSize: "0.85rem", }}>{item?.product?.name}&nbsp;</p>
                </div>
                <div>
                  <p style={{ fontSize: "1.25rem", marginBottom: "1.2rem", fontWeight: "500" }}>{`₹${(+item?.product?.original_price?.split(',')?.join('')) * (+item?.product?.qty)}`}</p>
                </div>
              </div>
            ))
          }
        </div>
        <div className="gift-card">
          <input type="text" placeholder='Apply giftcard' />
          <Button variant="contained" style={{ color: "white", fontSize: "12px", padding: " 0.75rem 2rem", backgroundColor: "black" }}>Apply</Button>
        </div>
        <div className="subtotal">
          <div>
            <p style={{ fontSize: "1.25rem", color: "#404040" }}>Subtotal</p>
            <p style={{ fontSize: "1.2rem", fontWeight: "500" }}>{`₹ ${subTotalPrice || 0}`}</p>
          </div>
          <div>
            <p style={{ fontSize: "1.25rem", color: "#404040" }}>Shipping</p>
            <p style={{ fontSize: "1.2rem", fontWeight: "500" }}>Free</p>
          </div>
        </div>
        <div className="cart-total">
          <p style={{ fontSize: "1.25rem", color: "#404040" }}>Total</p>
          <p style={{ fontSize: "1.5rem", fontWeight: "500" }}>{`Rs.${subTotalPrice || 0}`}</p>
        </div>
      </div>

      <BasicModal open={open} onClose={onClose} />
    </div>
  )
}

export default CheckOut