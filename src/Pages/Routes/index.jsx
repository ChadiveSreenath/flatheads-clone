import React from 'react'
import { Route, Routes } from "react-router-dom"
import CheckOut from '../CheckOut/Index'
import HomePage from '../HomePage'
import Login from '../Login/Index'
import NotFound from '../NotFound/Index'
import OrderDetails from '../OrderDetails/Index'
import ProductDetail from '../ProductDetail/Index'
import ProductList from '../ProductList/Index'
import Signup from '../Signup/Index'

const NavigationRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/checkout' element={<CheckOut />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='/products' element={<ProductList />} />
                <Route path='/products/:productId' element={<ProductDetail />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/order-details' element={<OrderDetails />} />
            </Routes>
        </div>
    )
}

export default NavigationRoutes

