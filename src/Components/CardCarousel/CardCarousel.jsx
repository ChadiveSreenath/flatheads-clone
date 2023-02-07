import React from "react"
import "./CardCarousel.css"
import 'react-slideshow-image/dist/styles.css';


const CardCarousel = () => {

    const Image = [
        {
            src: "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/3_cbb11308-d483-4164-a19b-1b3a9c842541_500x500.jpg?v=1674788412",
            name: " Day Zero Vedic V-Neck Mandarin Collar Shirt",
            price: "Rs. 699"
        },
        {
            src: "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/3_cbb11308-d483-4164-a19b-1b3a9c842541_500x500.jpg?v=1674788412",
            name: " Day Zero Vedic V-Neck Mandarin Collar Shirt",
            price: "Rs. 699"
        },
        {
            src: "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/3_cbb11308-d483-4164-a19b-1b3a9c842541_500x500.jpg?v=1674788412",
            name: " Day Zero Vedic V-Neck Mandarin Collar Shirt",
            price: "Rs. 699"
        },
    ]


    return (
        <div className="carousel-container">
            {
                Image.map((item, i) => (
                    <div className="card-carousel" key={i}>
                        <img src={item.src} alt="" />
                        <span className="card-item-name">{item.name}</span>
                        <span className="card-item-price">{item.price}</span>
                    </div>
                ))
            }
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