import React from 'react'
import ProData from "../../../data.json"
import ProductCard from '../Components/ProductCard'

const LimitedEdition = () => {

    return (
        <div className='product-details-container'>
      <div className="product-heading">
        <p>Classics</p>
      </div>
      <div className="products-container">
        <div className="product-card">
          {
            (ProData.mensdata.reverse()).map((item, i) => (
              <ProductCard item={item} key={i} />
            ))
          }
        </div>
      </div>

    </div>
    )
}

export default LimitedEdition