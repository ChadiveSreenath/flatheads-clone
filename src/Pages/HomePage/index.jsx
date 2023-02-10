import React from 'react'
import Branch from '../../Components/Branch/Branch'
import BrandStory from '../../Components/BrandStory/BrandStory'
import { CardCarousel, TextAreaTee } from '../../Components/CardCarousel/CardCarousel'
import BigCarousel from '../../Components/Carousel/Carousel'
import CustomerReview from '../../Components/CustomerReview/CustomerReview'
import VideoCont from '../../Components/FeaturedVideo'
import Goal from '../../Components/Goal/Goal'
import Swiper from '../../Components/Swiper/Swiper'
import './styles.css'

const HomePage = () => {
    
    return (
        <div className='body'>
            <BigCarousel />
            <Branch />
            <CardCarousel />
            <TextAreaTee />
            <Goal />
            <BrandStory />
            <Swiper />
            <CustomerReview />
            <VideoCont />
        </div>
    )
}

export default HomePage