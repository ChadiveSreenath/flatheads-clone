import { Button } from '@mui/material';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import "../Carousel/Carousel.css"
import Image1 from "../../Assets/BigCarousel/Flatheads_Bannerimag1.webp"
import Image2 from "../../Assets/BigCarousel/bannerimagenot.webp"
import Image3 from "../../Assets/BigCarousel/flatheads-not-out-edition-imag3.jpg"


const Images = [
  {
    src: Image1,
    color: "#a89587",
    heading: "A Limited Edition Collab",
    sub_heading_one: "Celebrating the entrepreneurial spirit of just",
    sub_heading_two: "getting started, always",
    textColor: "#303030"
  },
  {
    src: Image2,
    color: "#8fc9df",
    heading: "The Survivor Tee",
    sub_heading_one: "Celebrating the undying entrepreneurial spirit",
    sub_heading_two: "Final Sale",
    textColor: "#303030"
  },
  {
    src: Image3,
    color: "#1a1a1a",
    heading: "We hit our goal!",
    sub_heading_one: "Thank you for your incredible support ❤️",
    sub_heading_two: "You can still get the Survivor Tee 👕",
    textColor: "white"
  },
];


const BigCarousel = () => {
  return (
    <Slide>
      {
        Images.map((item, i) => (
          <div className='carousel-wrapper' key={i}>
            <div>
              <img src={item.src} alt="" className="carousel-image" />
            </div>
            <div className='first-image-text' style={{ backgroundColor: item.color, color: item.textColor }} >
              <h3>{item.heading}</h3>
              <p >{item.sub_heading_one}</p><br />
              <p >{item.sub_heading_two}</p><br />
              <Button variant="contained" style={{ color: "black", backgroundColor: "#fdd300", fontSize: "13px", margin: "10px" }}>SHOP NOW</Button>
            </div>
          </div>
        ))
      }
    </Slide >
  );
};

export default BigCarousel;