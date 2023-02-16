import { doc } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { db } from '../../../Firebase'
import { CartDataContext, UserAuth } from '../../../Store/DataContext'
import { removeItemFromCart, updateQuantityOfItem } from '../../../utils/helpers'


const ItemsCard = ({ item, index: i }) => {


    const [count, setCount] = useState(item?.qty || 1)
    const { cartData } = useContext(CartDataContext)
    const currentUser = UserAuth()
    const itemRef = doc(db, "users", `${currentUser?.email}`)

    const handleClick = (val) => {
        if (count + val < 1) {
            removeItemFromCart(item?.id, cartData, itemRef)
            return
        }
        setCount(prev => prev + val)
        updateQuantityOfItem(count + val, item?.id, cartData, itemRef)
    }


    const removeItem = id => removeItemFromCart(id, cartData, itemRef)

    return (
        <div className='item-summary-cont' key={i}>
            <div>
                <img src={item?.img} alt="" style={{ objectFit: 'contain', width: '35%', marginRight: "10px" }} />
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: "1.5rem" }}>
                    <div>
                        <p className='item-name-wrapper'>{item?.name}&nbsp;</p>
                    </div>
                    <div>
                        <p className='remove-btn' onClick={() => removeItem(item?.id)}>Remove</p>
                    </div>
                </div>
            </div>
            <div className='item-info-wrapper'>
                <p >{`₹${item?.original_price}`}</p>
                <p className='qty-cont'>
                    <span onClick={() => handleClick(+1)}>+</span>
                    <span style={{ cursor: "default" }}>{count}</span>
                    <span onClick={() => handleClick(-1)}>-</span>
                </p>
                <p>{(item?.original_price.split(",").join('')) * count}</p>
            </div>
        </div>
    )
}

export default ItemsCard