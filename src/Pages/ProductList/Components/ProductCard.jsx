import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ item, i }) => {

    const handleClick = (item) => {
        window.localStorage.setItem("proCard", JSON.stringify(item))
    }

    return (
        <div style={{ flex: "1" }} key={i}>
            <Link to={`/products/${item.id}`}>
                <img src={item?.img} alt="" width="231px" height="285px" style={{ cursor: "pointer" }} onClick={() => handleClick(item)} />
            </Link>
            <p style={{ fontSize: "1rem", padding: "0 1.25em" }}>{`${item.name} `}</p>
            <p style={{ color: "#404040" }}>{`Rs ${item.original_price}`}</p>
        </div>
    )
}

export default ProductCard