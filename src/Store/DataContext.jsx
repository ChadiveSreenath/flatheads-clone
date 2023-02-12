import React, { createContext,  useState } from 'react'


export const CartDataContext = createContext()


const cartItems = JSON.parse(window.localStorage.getItem("cart"))



const DataContext = ({ children }) => {
    const [cartData, setCartData] = useState(cartItems)


    return (
        <CartDataContext.Provider value={{ cartData, setCartData }} >
            {children}
        </CartDataContext.Provider>
    )
}

export default DataContext