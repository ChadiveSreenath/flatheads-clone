import React from 'react'
import "./Footer.css"
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiFillMail,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {




  return (
    <>
      <div className="footer">
        <div className='footer-top'>
          <div className='footer-contact'>
            <p className='p-tag'>CONTACT US</p>
            <div className='footer-contact-items'>
              <span>
                Drop us
              </span>
              <span>
                an email to rescue@flatheads.in or
              </span>
              <span>
                Call us on +91 7899136414
              </span>
              <span>
                (Calls available Mon-Fri, 10am-6pm)
              </span>
            </div>
          </div>
          <div>
            <p className='p-tag'>HELP</p>
            <div className='footer-help-items'>
              <span>Track My Order</span>
              <span>Exchanges & Returns</span>
              <span>FAQ</span>
              <span>Contact Us</span>
            </div>
          </div>
          <div>
            <p className='p-tag'>FOOTER SHOP</p>
            <div className='footer-shop-items'>
              <Link to="/collections"  >
                <span>Men</span>
              </Link>
              <Link to="/shoes"  >
                <span>Banana Kicks</span>
              </Link>
              <Link to="/shoes" >
                <span>SoftKnit Loafers</span>
              </Link>
              <Link to="/shoes" >
                <span>Linen Sneakers</span>
              </Link>
              <Link to="/shoes" >
                <span>KoolTex Trainers</span>
              </Link>
              <Link to="/shoes" >
                <span> New Troos Bamboo Loafers</span>
              </Link>
              <Link to="/shoes" >
                <span>Ellipsis Breathable Sneakers</span>
              </Link>
              <Link to="/shoes" >
                <span>Luft Ultralight Sneakers</span>
              </Link>
              <Link to="/limitededition" >
                <span>Bestsellers</span>
              </Link>
              <Link to="/products" >
                <span>Shop All</span>
              </Link>
            </div>
          </div>
          <div>
            <p className='p-tag'>ABOUT</p>
            <div className='footer-about-items'>
              <span>Why Flatheads</span>
              <span>Our Story</span>
              <span>Customer Reviews</span>
              <span>Blog</span>
              <span>In The Press</span>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className='hr-line'></div>
          <div className="bottom-wrapper">
            <span>© 2023 Flatheads.</span>
            <div className="icons-wrapper">
              <AiOutlineTwitter />
              <FaFacebook />
              <AiFillYoutube />
              <AiOutlineInstagram />
              <AiFillLinkedin />
              <AiFillMail />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer