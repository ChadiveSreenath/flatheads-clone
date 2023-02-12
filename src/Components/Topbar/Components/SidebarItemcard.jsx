import React from 'react'



const SidebarItemcard = ({ item, updateLocalStorageData, setCartData, data }) => {


    const [count, setCount] = React.useState(item.quantity || 1)

    const handleClick = (val) => {
        if (count + val < 1) return
        updateLocalStorageData(item.id, { quantity: count + val })
        setCount(prev => prev + val)
    }

    const removeItem = (id) => {
        const updatedCart = data?.filter((elem) => elem.id !== id)
        setCartData(updatedCart)
    }


    return (
        <div className='drawer-item-summary' >
            <div className="item-img-wrapper">
                <img src={item?.img} alt="" style={{ height: '150px', objectFit: 'contain', width: '100%', marginRight: "10px" }} />
            </div>
            <div className="item-summary-wrapper">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                        <p className='drawer-item-name'>{item.name}&nbsp;</p>
                    </div>
                    <div>
                        <p style={{ fontSize: "0.75rem", color: "#303030" }}>{`Rs.${(item.original_price.split(",").join('')) * count}`}</p>
                    </div>
                </div>
                <div className="item-qty-wrapper">
                    <p className='drawer-qty'>
                        <span onClick={() => handleClick(+1)}>+</span>
                        <span style={{ cursor: "default" }}>{count}</span>
                        <span onClick={() => handleClick(-1)}>-</span>
                    </p>
                    <p className='drawer-remove-btn' onClick={() => removeItem(item.id)} >Remove</p>
                </div>
            </div>
        </div>
    )
}

export default SidebarItemcard