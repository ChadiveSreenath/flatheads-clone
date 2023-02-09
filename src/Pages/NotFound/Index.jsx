import React, { memo } from "react"
import pagenotfoundImage from "../../Assets/pagenotfound.jpg"

const NotFound = () => {
    return (

        <div className="text-center" style={{ textAlign: 'center', margin: 'auto' }}>

            <h1>Oops..! 404 Page Not Found</h1>
            <p>Looks like you came to wrong page on our server</p>
            <img src={pagenotfoundImage} height="500" width="500" alt="not found" className='m-auto object-cover' />
        </div>


    )
}
export default memo(NotFound)