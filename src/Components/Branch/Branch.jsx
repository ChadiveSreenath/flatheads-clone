import React from 'react'
import "./Branch.css"

const Branch = () => {
    return (
        <div>
            {/* Branches section  */}
            <div className="branches">
                <span className='branch-names'>Available in the USA & UAE</span>
                <div className="country-branch">
                    <div className="country-store">
                        <span className="country">US</span>
                        <span className="store">Shop USA Store &nbsp; {">"} </span>
                    </div>
                    <div className="country-store">
                        <span className="country">AE</span>
                        <span className="store">Shop UAE Store &nbsp;{">"} </span>
                    </div>
                </div>
            </div>
            {/* text area section  */}
            <div className="textarea">
                <span>The Day Zero Shirts</span>
                <div>
                    <p>Celebrating the entrepreneurial spirit of just getting started, always.</p>
                    <p>A Flatheads x Kingdom Of White collab.</p>
                </div>
            </div>

        </div>
    )
}

export default Branch




