import { Button } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartDataContext } from '../../Store/DataContext'
import ItemsCard from './components/ItemsCard'
import "./styles.css"

const CartPage = () => {
  const { cartData: data, setCartData} = useContext(CartDataContext)

  const updateLocalStorageData = (id, value) => {
    const updatedData = data?.map(item => item.id === id ? { ...item, ...value } : item)
    window.localStorage.setItem('cart', JSON.stringify(updatedData))
    setCartData(updatedData)
  }

  const ItemsSubtotalArray = () => data?.map(item => {
    const price = + item.original_price.split(',').join('')
    return price * (item?.quantity || 1)
  })

  return (
    <div className="cart-section">
      <div className="cart-section-header">
        <h3>Cart</h3>
        <Link to="/products" style={{ textDecoration: "none" }}>
          <p>Continue Shopping</p>
        </Link>
      </div>
      <div className="cart-summary-container">
        <div className="price-summary">
          <div>
            <p>Products</p>
          </div>
          <div>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
        </div>
        <div className="cart-info">
          <div className="info-cart-wrapper">
            {
              data?.map((item, i) => (
                <ItemsCard item={item} key={i} index={i} updateLocalStorageData={updateLocalStorageData} data={data} />
              ))
            }
          </div>
        </div>
      </div>
      <div className="subtotal-container">
        <p className='subtotal-text'>Subtotal</p>
        <p className='full-total-text'>
          {ItemsSubtotalArray()?.reduce((def, curr) => def + curr, 0)|| 0}
        </p>
        <p>Tax included. Shipping calculated at checkout.</p>
        <p>Orders will be processed in INR.</p>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <Button variant="contained" style={{ color: "white", fontSize: "12px", padding: " .75rem 2.2rem", backgroundColor: "black" }}>CheckOut</Button>
        </Link>
      </div>
    </div>
  )
}

export default CartPage
