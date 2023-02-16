import { doc } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { db } from '../../../Firebase'
import { CartDataContext, UserAuth } from "../../../Store/DataContext"
import { removeItemFromCart, updateQuantityOfItem } from '../../../utils/helpers'


const SidebarItemcard = ({ item }) => {

    const [count, setCount] = useState(item?.qty || 1)
    const currentUser = UserAuth()
    const itemRef = doc(db, "users", `${currentUser?.email}`)
    const { cartData } = useContext(CartDataContext)

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
        <div className='drawer-item-summary' >
            <div className="item-img-wrapper">
                <img src={item?.img} alt="" style={{ height: '150px', objectFit: 'contain', width: '100%', marginRight: "10px" }} />
            </div>
            <div className="item-summary-wrapper">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                        <p className='drawer-item-name'>{item?.name}&nbsp;</p>
                    </div>
                    <div>
                        <p style={{ fontSize: "0.75rem", color: "#303030" }}>{`Rs.${+(item?.original_price.split(",").join('')) * item?.qty}`}</p>
                    </div>
                </div>
                <div className="item-qty-wrapper">
                    <p className='drawer-qty'>
                        <span onClick={() => handleClick(+1)}>+</span>
                        <span style={{ cursor: "default" }}>{count}</span>
                        <span onClick={() => handleClick(-1)}>-</span>
                    </p>
                    <p className='drawer-remove-btn' onClick={() => removeItem(item?.id)} >Remove</p>
                </div>
            </div>
        </div>
    )
}

export default SidebarItemcard