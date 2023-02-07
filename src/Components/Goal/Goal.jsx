import React from 'react'
import "./Goal.css"

const Goal = () => {
    return (
        <div className='goal-container'>
            <div className="edition-container">
                <span>The Not Out Edition</span>
                <p>We've hit our goal! Thank you for your incredible support. ❤</p>
                <p>Pre-orders are now closed.</p>
                <p> <a href="https://www.instagram.com/flatheadsofficial/">Follow us on Instagram</a> to stay tuned.</p>
            </div>
            <div className='meter-container'>
                <span>Goal: 900 shoes</span>
                <meter value="3"></meter>
                <div className='stats'>
                    <p style={{fontWeight:"900"}}>900 / 900</p>
                    <p>shoes sold</p>
                </div>
            </div>
        </div>
    )
}

export default Goal



