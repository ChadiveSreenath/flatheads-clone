import React from 'react'
import ProData from "../../data.json"
import ProductCard from './Components/ProductCard'
import "./styles.css"

const ProductList = () => {

  // console.log(ProData)

  return (
    <div className='product-details-container'>
      <div className="product-heading">
        <p>Shop All</p>
      </div>
      <div className="products-container">
        <div className="product-card">



          {
            (ProData.products).map((item, i) => (
              <ProductCard item={item} key={i} />
            ))
          }
          {
            (ProData.mensdata).map((item, i) => (
              <ProductCard item={item} key={i} />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default ProductList