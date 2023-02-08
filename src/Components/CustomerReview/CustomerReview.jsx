import { Rating } from '@mui/material'
import React from 'react'
import "./CustomerReview.css"

const CustomerReview = () => {


  const customerRating = [
    {
      heading: "My feet have stopped complaining.",
      customerName: "- Pranav Gadgil",
      customerPlace: "Founder, Baeyork"
    },
    {
      heading: "Feels like wearing a T - shirt on my feet",
      customerName: " - Ajinkya Malasane",
      customerPlace: "Co - founder, Playment"
    },
    {
      heading: "They feel comfortable all day long",
      customerName: "- Bharat Jain",
      customerPlace: "Teacher, Sara Pre - school"
    },
  ]


  return (
    <div className=''>
      <div className='customer-reviews'>
        <span> CUSTOMER REVIEWS</span>
      </div>
      <div className='customer-details'>
        {
          customerRating.map((item) => (
            <div className='rating-card' >
              <span>
                <Rating name="read-only" value={5} readOnly sx={{ color: "#d3b38a" }} />
              </span><br />
              <span className='customer-description'>{item.heading}</span>
              <p className='customer-name'>{item.customerName}</p>
              <p className='customer-name'>{item.customerPlace}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default CustomerReview














