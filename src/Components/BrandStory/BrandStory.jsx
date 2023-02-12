import React from 'react'
import "./BrandStory.css"
import BgImage1 from "../../Assets/ShowImages/Innovative_materials-01.webp";
import BgImage2 from "../../Assets/ShowImages/Smart_design-02.webp";
import BgImage3 from "../../Assets/ShowImages/Supreme_comfort-03.webp";
import BgImage4 from "../../Assets/ShowImages/Ultra_Lightweight_5.webp";
import BgImage5 from "../../Assets/ShowImages/Environment_friendly-04.webp";

const BrandStory = () => {

    let bgImages = [
        { img: BgImage1, name: "Innovative Materials" },
        { img: BgImage2, name: "Smart Design" },
        { img: BgImage3, name: "Supreme Comfort" },
        { img: BgImage4, name: "Ultra LightWeight" },
        { img: BgImage5, name: "Environment Friendly" },
    ];


    return (
        <div className='brand-container'>
            <div className="brand-text">
                <span>WHY FLATHEADS?</span>
            </div>
            <div className="brand-story">
                <div className="brand-icons">
                    <div>
                        <span className='speciality'>What's Special About Flatheads?</span>
                    </div>
                    <div className='brand-icon-images'>
                        {
                            bgImages.map((item,i) => (
                                <div className="icon-cont"  key={i}>
                                    <img src={item.img} alt="" height="50px" width="50px" />
                                    <span style={{ color: "#404040" }}>{item.name}</span>
                                </div>
                            ))
                        }
                        <div>
                            <button style={{border:"none",outline:"none"}}>Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="brand-story-text">
                    <span>Brand Story</span>
                    <p>
                        Flatheads make shoes for the new generation. We are revolutionizing casual footwear through innovative materials and thoughtful design that is relevant to your lifestyle. Our shoes are made with natural materials like bamboo and banana fibre, optimized to offer you comfort that lasts all through the day., and more! From meetings to meet-ups, our shoes are crafted to fit every aesthetic.
                    </p>
                    <button className='btn-brand'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default BrandStory