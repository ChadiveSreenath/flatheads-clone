import React from 'react'
import Branch from '../../Components/Branch/Branch'
import BrandStory from '../../Components/BrandStory/BrandStory'
import { CardCarousel, TextAreaTee } from '../../Components/CardCarousel/CardCarousel'
import BigCarousel from '../../Components/Carousel/Carousel'
import CustomerReview from '../../Components/CustomerReview/CustomerReview'
import Footer from '../../Components/Footer/Footer'
import Goal from '../../Components/Goal/Goal'
import Swiper from '../../Components/Swiper/Swiper'
import ResponsiveAppBar from '../../Components/Topbar/Topbar'
import './styles.css'

const HomePage = () => {
    return (
        <div className='body'>
            <ResponsiveAppBar />
            <BigCarousel />
            <Branch />
            <CardCarousel />
            <TextAreaTee />
            <CardCarousel />
            <CustomerReview />
            <Swiper />
            <Goal />
            <BrandStory />
            <Footer />
        </div>
    )
}

export default HomePage