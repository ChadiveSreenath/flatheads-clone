import React from 'react'
import { Route, Routes } from "react-router-dom"
import Footer from '../../Components/Footer/Footer'
import ResponsiveAppBar from '../../Components/Topbar/Topbar'
import CartPage from '../CartPage/Index'
import CheckOut from '../CheckOut/Index'
import HomePage from '../HomePage'
import Login from '../Login/Index'
import NotFound from '../NotFound/Index'
import ProductDetail from '../ProductDetail/Index'
import ProductList from '../ProductList/Index'
import ShoeCard from '../ProductList/pages/Shoes'
import Signup from '../Signup/Index'
import Collections from "../ProductList/pages/Collections"
import LimitedEdition from '../ProductList/pages/LimitedEdition'
import Logout from '../Logout'


const NavigationRoutes = () => {
    return (
        <div>
            <ResponsiveAppBar />
            <div className='main-content'>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/checkout' element={<CheckOut />} />
                    <Route path='/notfound' element={<NotFound />} />
                    <Route path='/products' element={<ProductList />} />
                    <Route path='/products/:productId' element={<ProductDetail />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/cart' element={<CartPage />} />
                    <Route path='/shoes' element={<ShoeCard />} />
                    <Route path='/collections' element={<Collections />} />
                    <Route path='/LimitedEdition' element={<LimitedEdition />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default NavigationRoutes

