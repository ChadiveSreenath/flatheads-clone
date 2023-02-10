import React from 'react'
import ProData from "../../../data.json"
import ProductCard from '../Components/ProductCard'

const ShoeCard = () => {
    return (
        <div className='product-details-container'>
            <div className="product-heading">
                <p>Shoes</p>
            </div>
            <div className="products-container">
                <div className="product-card">
                    {
                        (ProData.products).map((item, i) => (
                            <ProductCard item={item} key={i} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default ShoeCard