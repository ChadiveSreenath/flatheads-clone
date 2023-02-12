import React, { useState } from 'react'

const ItemsCard = ({ item, index: i, updateLocalStorageData, data }) => {

    const [count, setCount] = useState(item.quantity || 1)

    const handleClick = (val) => {
        if (count + val < 1) return
        updateLocalStorageData(item.id, { quantity: count + val })
        setCount(prev => prev + val)
    }


    const removeItem = (item) => {
        data.filter((product) => {
            if (item.id === product.id) {
                console.log(data)
                return data?.remove(product)
            }

        })
    }

    return (
        <div className='item-summary-cont' key={i}>
            <div>
                <img src={item?.img} alt="" style={{ objectFit: 'contain', width: '35%', marginRight: "10px" }} />
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: "1.5rem" }}>
                    <div>
                        <p className='item-name-wrapper'>{item.name}&nbsp;</p>
                        <p className='item-name-wrapper'> | {item.gender}</p>
                    </div>
                    <div>
                        <p className='remove-btn' onClick={() => removeItem(item, i)}>Remove</p>
                    </div>
                </div>
            </div>
            <div className='item-info-wrapper'>
                <p >{`₹${item.original_price}`}</p>
                <p className='qty-cont'>
                    <span onClick={() => handleClick(+1)}>+</span>
                    <span style={{ cursor: "default" }}>{count}</span>
                    <span onClick={() => handleClick(-1)}>-</span>
                </p>
                <p>{(item.original_price.split(",").join('')) * count}</p>
            </div>
        </div>
    )
}

export default ItemsCard