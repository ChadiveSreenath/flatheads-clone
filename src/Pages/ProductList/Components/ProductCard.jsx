import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ item, i }) => {

    const navigate = useNavigate()
    return (
        <div style={{ flex: "1" }} key={i} onClick={() => {
            navigate(`/products/${item.id}`)
            window.scroll(0, 0)
        }}>
            <img src={item?.img} alt="" width="231px" height="285px" style={{ cursor: "pointer" }} />
            <p style={{ fontSize: "1rem", padding: "0 1.25em", cursor: "pointer" }}>{`${item.name} `}</p>
            <p style={{ color: "#404040", cursor: "pointer" }}>{`Rs ${item.original_price}`}</p>
        </div>
    )
}

export default ProductCard