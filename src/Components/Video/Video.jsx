import React from 'react'
import "./Video.css"
import  Image1 from "../../Assets/FeaturedImages/mintlogo.png"
import  Image2 from "../../Assets/FeaturedImages/yourstorylogo.webp"
import  Image3 from "../../Assets/FeaturedImages/lbblogo.webp"
import  Image4 from "../../Assets/FeaturedImages/cnbclogo.webp"
import  Image5 from "../../Assets/FeaturedImages/theindianexlogo.webp"


const Video = () => {

        const ImageData = [
            {
                img:Image1
            },
            {
                img:Image2
            },
            {
                img:Image3
            },
            {
                img:Image4
            },
            {
                img:Image5
            },
        ]

    return (
        <div>
            <div className="video-cont">

            </div>
            <div className="featured-on">
                
            </div>
        </div>
    )
}

export default Video