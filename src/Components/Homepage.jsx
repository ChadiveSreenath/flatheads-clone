import React from 'react'
import BigCarousel from '../Components/Carousel/Carousel'
// import Navbar from './Navbar/Navbar'
import Footer from "../Components/Footer/Footer"
import Branch from './Branch/Branch'
import { CardCarousel, TextAreaTee } from '../Components/CardCarousel/CardCarousel'
import CustomerReview from './CustomerReview/CustomerReview'
import Goal from './Goal/Goal'
import BrandStory from './BrandStory/BrandStory'
import ResponsiveAppBar from './Topbar/Topbar'


const Homepage = () => {
    return (
        <>
            {/* <Navbar /> */}
            <ResponsiveAppBar />
            <BigCarousel />
            <Branch />
            <CardCarousel />
            <TextAreaTee />
            <CardCarousel />
            <CustomerReview />
            <Goal />
            <BrandStory />
            <Footer />
        </>
    )
}

export default Homepage