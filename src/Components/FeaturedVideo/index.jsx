import React from 'react'
import "./Video.css"
import Gkvideo from "../../Assets/videos/Adjustment_Layer.mp4"
import Image1 from "../../Assets/FeaturedImages/mintlogo.png"
import Image2 from "../../Assets/FeaturedImages/yourstorylogo.webp"
import Image3 from "../../Assets/FeaturedImages/lbblogo.webp"
import Image4 from "../../Assets/FeaturedImages/cnbclogo.webp"
import Image5 from "../../Assets/FeaturedImages/theindianexlogo.webp"


const VideoCont = () => {

    const ImageData = [
        {
            img: Image1
        },
        {
            img: Image2
        },
        {
            img: Image3
        },
        {
            img: Image4
        },
        {
            img: Image5
        },
    ]

    return (
        <div className='video-image'>
            <div className="video-cont">
                <video controls autoPlay muted src={Gkvideo} />
            </div>
            <div className="featured-on">
                <div className="featured-heading">
                    <div>FEATURED ON</div>
                </div>
                <div className="image-wrapper" >
                    {
                        ImageData.map((item, i) => (
                            <>
                                <img src={item.img} alt="" className='featured-images' key={i} />
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default VideoCont