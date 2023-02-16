import React, { createContext, useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, } from "firebase/auth"
import { auth, db } from '../Firebase'
import { doc, onSnapshot, setDoc } from 'firebase/firestore'

export const CartDataContext = createContext()


// const cartItems = JSON.parse(window.localStorage.getItem("cart"))

export const UserSignUp = (email, password) => {
    const userCreate = createUserWithEmailAndPassword(auth, email, password)
    const firebaseData = setDoc(doc(db, "users", email), {
        cartProducts: []
    })
    return userCreate, firebaseData
}

export const UserAuth = () => {
    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => { setCurrentUser(user) })
        return unsub
    }, [])
    return currentUser
}

export const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

export const logout = () => {
    return signOut(auth)
}



const DataContext = ({ children }) => {
    const [cartData, setCartData] = useState([])
    const [openSideBarCart, setOpenSideBarCart] = useState(false)
    const currentUser = UserAuth()

    useEffect(() => {
        onSnapshot(doc(db, "users", `${currentUser?.email}`), (doc) => {
            setCartData(doc.data()?.cartProducts)
        })
    }, [currentUser?.email])

    const ItemsSubtotalArray = () => cartData?.map(item => {
        const price = + item?.product?.original_price?.split(',')?.join('')
        return price * (item?.product?.qty)
    })

    const subTotalPrice = ItemsSubtotalArray()?.reduce((def, curr) => def + curr, 0)

    return (
        <CartDataContext.Provider value={{ cartData, setCartData, ItemsSubtotalArray, subTotalPrice, openSideBarCart, setOpenSideBarCart }} >
            {children}
        </CartDataContext.Provider>
    )
}

export default DataContext