import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CardCarousel } from '../../Components/CardCarousel/CardCarousel'
import "./styles.css"
import ProductsData from '../../data.json'
import { CartDataContext, UserAuth } from "../../Store/DataContext"
import { db } from "../../Firebase"
import { arrayUnion, doc, updateDoc } from "firebase/firestore"
import { IoMdDoneAll } from 'react-icons/io'



const ProductDetail = () => {
  const allProducts = [...ProductsData.mensdata, ...ProductsData.products]
  const { productId } = useParams()
  let SingleProduct = allProducts.find(item => item.id === +productId)

  const { cartData, setOpenSideBarCart } = useContext(CartDataContext)
  const currentUser = UserAuth()

  const CartItemId = doc(db, "users", `${currentUser?.email}`)

  let CartBtn = cartData?.some(item => item?.product?.id === +SingleProduct?.id)//true || false


  const Addtocart = async (SingleProduct) => {
    if (currentUser?.email) {
      await updateDoc(CartItemId, {
        cartProducts: arrayUnion({
          product: SingleProduct
        })
      })
      setOpenSideBarCart(true)
    }
    else {
      alert("please login to add to cart")
    }
  }


  return (
    <div className="product-detail">
      <div className="product-content">
        <div className="img-wrapper">
          <img src={SingleProduct.img} alt="" width="100%" />
        </div>
        <div className="content-wrapper">
          <p style={{ fontSize: "2rem", fontWeight: "600", margin: "0" }}>{SingleProduct.name}</p>
          <span className='price-tag'>{`Rs ${SingleProduct.original_price}`}</span>
          <p style={{ fontSize: ".75rem", color: "#404040" }}>Inclusive of all taxes</p>
          {!CartBtn ? <Button
            onClick={() => Addtocart(SingleProduct)}
            sx={{ width: "35vw", color: "white", backgroundColor: "#fdd300", padding: "0.5rem 0", ":hover": { backgroundColor: "white", color: "black", }, textDecoration: 'none' }}
          >

            ADD TO CART

          </Button>
            :
            <div style={{ width: "35vw", color: "white", backgroundColor: "#fdd300", padding: "0.5rem 0", textDecoration: 'none', borderRadius:'5px' }}>
              <div className='flex align-center justify-center'><IoMdDoneAll style={{ fontSize: '1.5rem' }} />&nbsp;&nbsp;&nbsp; ADDED TO CART</div>
            </div>
          }
          <div className="info-wrapper">
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0258/2485/4100/files/Return.png?v=1646606026" alt="" width="5%" />
              <p>FREE 7-day returns/exchanges</p>
            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0258/2485/4100/files/Dispatch_441920e8-0fc0-4ab7-984f-f9ca2c4afeae.png?v=1646606027" alt="" width="5%" />
              <p>Dispatches within 72 hours{" "}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0258/2485/4100/files/cash-on-delivery_833abd0a-8dd4-4e8a-969d-bdbab6722946.png?v=1646606027" alt="" width="5%" />
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
          <CardCarousel />
        </div>
      </div>
    </div>
  )
}

export default ProductDetail