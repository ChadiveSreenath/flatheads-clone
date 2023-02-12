import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import ProData from "../../../data.json"
import ProductCard from '../Components/ProductCard'

const Collections = () => {

  const [progress, showProgress] = useState(true)

    useEffect(() => {
      setTimeout(() => {
        showProgress(false)
      }, 2000)
    }, [])


    return (
        <div className='product-details-container'>
      <div className="product-heading">
        <p>Classics</p>
      </div>
      <div className="products-container">
        <div className="product-card">
          {
              progress ?
              <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <Box >
                  <CircularProgress size={180} />
                </Box>
              </div>
              :
            (ProData.mensdata).map((item, i) => (
              <ProductCard item={item} key={i} />
            ))
          }
        </div>
      </div>

    </div>
    )
}

export default Collections