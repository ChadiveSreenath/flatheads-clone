import React, { useContext } from 'react'
import "./styles.css"
import Logo from "../../Assets/flatheads-logo.webp"
import { Button, Link, TextField } from '@mui/material'
import styled from 'styled-components';
import { CartDataContext } from '../../Store/DataContext';



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


  const { cartData: data, setCartData } = useContext(CartDataContext)

  // console.log(data.original_price, data.quantity)


  const cartSubtotal = data?.map((item, i) => {
    const subtotal = +item.original_price.split(",").join("")
    return subtotal * item.quantity
  })

  const cartAmount = cartSubtotal?.reduce((acc, curr) => {
    return acc + curr
  }, 0)

  // console.log(cartAmount)

  return (
    <div className="checkout-container">
      <div className="details-container">
        <div className="logo-wrapper">
          <img src={Logo} alt="" />
        </div>
        <div className="contact-information" >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "34.5vw" }}>
            <p className='heading-info'>Contact Information</p>
            <p style={{ fontSize: "0.75rem" }} > Already have an account?
              <Link to="/login" style={{ textDecoration: "none" }}>
                Log in
              </Link>
            </p>
          </div>
          <div>
            <CssTextField label="Email" />
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
            <CssTextField label='Enter Country/region' />
          </div>
          <div>
            <CssTextField label='Enter your name' />
          </div>
          <div>
            <CssTextField label="Apartment, suite, etc. (optional)" />
          </div>
          <div>
            <CssTextField label='City' />
          </div>
          <div>
            <CssTextField label='State' />
          </div>
          <div>
            <CssTextField label='PinCode' />
          </div>
          <div>
            <CssTextField label="Enter Mobile Number" />
          </div>
          <span style={{ fontSize: "0.85rem", display: "flex", margin: "0" }}>
            <input type="checkbox" />
            <p>Save this information for next time</p>
          </span>
        </div>
        <div className="footer-wrapper">
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <p className='return-cart'> Return to Cart</p>
          </Link>
          <Button variant="contained" style={{ color: "white", fontSize: "12px", padding: "1rem" }}>Continue to shipping</Button>
        </div>
      </div>
      <div className="summary-container">
        <div className="item-summary">
          {
            data?.map((item, i) => (
              <div className='cart-item-wrapper' key={i}>
                <div>
                  <img src={item.img} alt="" style={{ objectFit: 'contain', width: '20%', marginRight: "10px" }} />
                  <p style={{ fontSize: "0.85rem", }}>{item?.name}&nbsp;</p>
                  <p style={{ fontSize: "0.85rem", }}> | {item?.gender}</p>
                </div>
                <div>
                  <p style={{ fontSize: "1.25rem", marginBottom: "1.2rem", fontWeight: "600" }}>{`₹${item?.original_price}`}</p>
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
            <p style={{ fontSize: "1.25rem", fontWeight: "700" }}>{`₹ ${cartAmount || 0}`}</p>
          </div>
          <div>
            <p style={{ fontSize: "1.25rem", color: "#404040" }}>Shipping</p>
            <p style={{ fontSize: "1.25rem", fontWeight: "700" }}>Free</p>
          </div>
        </div>
        <div className="cart-total">
          <p style={{ fontSize: "1.25rem", color: "#404040" }}>Total</p>
          <p style={{ fontSize: "1.5rem", fontWeight: "700" }}>{`Rs.${cartAmount || 0}`}</p>
        </div>
      </div>
    </div>
  )
}

export default CheckOut