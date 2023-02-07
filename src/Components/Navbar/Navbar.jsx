import React from 'react'
import "./Navbar.css"
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CustomizedMenus from './Category';

const Navbar = () => {
  return (
    <div className='nav-container'>
      {/* Top Bar  */}
      <div className='nav-logo'>
        <img src="https://cdn.shopify.com/s/files/1/0258/2485/4100/files/flatheads-logo-new-hotizontal_180x_2x_bf74c8db-79f1-4904-b343-3b0e2681ec07_192x32.png?v=1647508945" alt="" />
      </div>
      <div className='nav-categories'>
        <CustomizedMenus color="Neutral" name={"Shop"}  />
        <CustomizedMenus name={"Limited Edition(New)"} />
        <CustomizedMenus name={"Shoes"} />
        <CustomizedMenus name={"Classics"} />
        <CustomizedMenus name={"About"} />
        <CustomizedMenus name={"Help"} />
      </div>
      <div className='nav-icons'>
        <PersonIcon />
        <SearchIcon />
        <LocalMallIcon />
      </div>
    </div>
  )
}

export default Navbar