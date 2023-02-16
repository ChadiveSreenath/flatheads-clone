import React from 'react'
import { useNavigate } from 'react-router-dom'
import { logout, UserAuth } from '../../Store/DataContext'
import "./styles.css"

const Logout = () => {

    const navigate = useNavigate()

    const handlelogout = () => {
        logout().then(() => {
            navigate("/")
        }).catch((err) => console.log(err.message))

    }

    const currentUser = UserAuth()


    return (
        <div className='logout-wrapper'>
            <div className="heading">
                <p>Login</p>
            </div>
            <div className="logout-text">
                <p onClick={handlelogout}>Logout</p>
            </div>
            <div className="email-text">
                <p>Logged as :</p>
                <p>{currentUser?.email}</p>
            </div>
        </div>
    )
}

export default Logout