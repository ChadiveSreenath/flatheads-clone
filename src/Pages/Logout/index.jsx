import React from 'react'
import { useNavigate } from 'react-router-dom'
import { logout, useAuth } from '../../Firebase'
import "./styles.css"

const Logout = () => {

    const navigate = useNavigate()

    const handlelogout = () => {
        logout().then(() => {
            navigate("/")
            window.location.reload(false)
        }).catch((err) => console.log(err.message))

    }

    const currentUser = useAuth()


    return (
        <div className='logout-wrapper'>
            <div className="heading">
                <p>Login</p>
            </div>
            <div className="logout-text">
                <p onClick={handlelogout}>Logout</p>
            </div>
            <div className="email-text">
                <p>Logged in as :</p>
                <p>{currentUser?.email}</p>
            </div>
        </div>
    )
}

export default Logout