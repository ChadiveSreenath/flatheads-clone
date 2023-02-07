import React from 'react'
import Image1 from "../../Assets/SwiperImages/image_1.jpeg"
import Image2 from "../../Assets/SwiperImages/image_2.jpeg"
import Image3 from "../../Assets/SwiperImages/image_3.jpeg"
import Image4 from "../../Assets/SwiperImages/World_s_First_KoolTex2.jpg"
import "./Swiper.css"

const Swiper = () => {

    const SwiperData = [
        {
            img: Image1,
            shoeName: "Banana Kicks",
            heading: "Spark conversations with the world's 1st banana fabric sneakers."
        },
        {
            img: Image2,
            shoeName: "Linen Sneakers",
            heading: "All weather, dual toned linen shoes to make heads turn."
        },
        {
            img: Image3,
            shoeName: "SoftKnit Loafers",
            heading: "Super soft, super stylish. Comfort never looked this chic!"
        },
        {
            img: Image4,
            shoeName: "KoolTex Trainers",
            heading: "you've got things to do. Trainers to keep you on the move."
        },
    ]

    return (
        <div className='swiper-cont'>
            <div>
                <p className='world-first'>WORLD'S FIRST</p>
            </div>
            <div className="swiper-section">
                {
                    SwiperData.map((item) => (
                        <div className='swiper-slider'>
                            <div className='swiper-image' >
                                <img src={item.img} alt="" height="560vh" width="550vw" />
                            </div>
                            <div className='swiper-text'>
                                <div>{item.shoeName}</div>
                                <p>{item.heading}</p>
                                <button>Shop Now</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Swiper
