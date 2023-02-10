import { Button } from '@mui/material'
import React from 'react'
import { CardCarousel } from '../../Components/CardCarousel/CardCarousel'
import "./styles.css"

const ProductDetail = () => {

  let cart = JSON.parse(window.localStorage.getItem("proCard"))
  console.log(cart)

  const handleClick = (item) => {
    window.localStorage.setItem("proCard", JSON.stringify(item))
    window.location.reload(false)
}

  return (
    <div className="product-detail">
      <div className="product-content">
        <div className="img-wrapper">
          <img src={cart.img} alt="" width="100%" />
        </div>
        <div className="content-wrapper">
          <p style={{fontSize: "2rem", fontWeight: "600" ,margin:"0"}}>{cart.name}</p>
          <span className='price-tag'>{`Rs ${cart.original_price}`}</span>
          <p style={{ fontSize: ".75rem", color: "#404040" }}>Inclusive of all taxes</p>
          <Button sx={{ width: "35vw", color: "white", backgroundColor: "#fdd300", padding: "0.5rem 0", ":hover": { backgroundColor: "white", color: "black", }, textDecoration: 'none' }} >ADD TO CART</Button>
          <div className="info-wrapper">
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0258/2485/4100/files/Return.png?v=1646606026" alt="" width="5%"  />
              <p>FREE 7-day returns/exchanges</p>
            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0258/2485/4100/files/Dispatch_441920e8-0fc0-4ab7-984f-f9ca2c4afeae.png?v=1646606027" alt="" width="5%"  />
              <p>Dispatches within 72 hours</p>
            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0258/2485/4100/files/cash-on-delivery_833abd0a-8dd4-4e8a-969d-bdbab6722946.png?v=1646606027" alt="" width="5%"  />
              <p>View COD Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>
      <div className="you-may-like">
        <div>
          <p>You may also like </p>
        </div>
          <div>
            <CardCarousel handleClick={handleClick}/>
          </div>
      </div>
    </div>
  )
}

export default ProductDetail