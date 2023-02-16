import React from "react"
import "./CardCarousel.css"
import 'react-slideshow-image/dist/styles.css';
import { Slide } from "react-slideshow-image";
import { Link, useNavigate } from "react-router-dom";
import ProData from "../../data.json"


const CardCarousel = () => {

    const navigate = useNavigate()
    const handleProduct = (id) => {
        navigate(id)
        window.scroll(0, 0)
    }

    return (
        <div className='recommendation-slider'>
            <Slide slidesToShow={4} >
                {
                    ProData.mensdata.map((item, i) => (
                        <div key={i} className="slider-items" onClick={() => handleProduct(item.id)}>
                            <div>
                                <Link to={`/products/${item.id}`}>
                                    <img src={item.img} alt="" width="100%" style={{ cursor: "pointer" }} />
                                </Link>
                            </div>
                            <div>
                                <span>{item.name}</span>
                                <span style={{ color: "#404040" }}>{`Rs ${item.original_price}`}</span>
                            </div>
                        </div>
                    ))
                }
            </Slide >
        </div>
    );
};


const TextAreaTee = () => {
    return (
        <div className="survivor-tee">
            <span>The Survivor Tee</span>
            <p>Flatheads & The Souled Store celebrate the undying entrepreneurial spirit.</p>
            <p>Final Sale! Last day to buy these limited edition tees.</p>
        </div>
    )
}
export { TextAreaTee, CardCarousel }