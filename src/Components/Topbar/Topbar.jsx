import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SwipeableTemporaryDrawer from './Drawer';
import BasketIcon from '../../Assets/Icons/BasketIcon';
import PersonIcon from '../../Assets/Icons/PersonIcon';
import Logo from "../../Assets/flatheads-logo.webp"
import { Link, useNavigate } from 'react-router-dom';
import './Topbar.css'
import SidebarItemcard from './Components/SidebarItemcard';
import CloseIcon from '@mui/icons-material/Close';
import { CartDataContext } from '../../Store/DataContext';

const pages = ['Shop', 'Limited Edition(New)', 'Shoes', "Classics", "About", "Help"];

function ResponsiveAppBar() {
    const [openDrawer, setOpenDrawer] = React.useState(false)
    const [openCart, setOpenCart] = React.useState(false)
    const toggleDrawer = () => setOpenDrawer(prev => !prev)
    const toggleCart = () => setOpenCart(prev => !prev)

    const history = useNavigate();

    const handleNavigate = (page) => {
        if (page === "Shoes") {
            history("/shoes")
            window.location.reload(false)
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
        else if (page === "Shop") {
            history("/products")
            window.location.reload(false)
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
        else if (page === "Classics") {
            history("/Collections")
            window.location.reload(false)
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
        else if (page === "Limited Edition(New)") {
            history("/LimitedEdition")
            window.location.reload(false)
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }

    }

    const { cartData: data, setCartData } = React.useContext(CartDataContext)

    const updateLocalStorageData = (id, value) => {
        const updatedData = data?.map(item => item.id === id ? { ...item, ...value } : item)
        window.localStorage.setItem('cart', JSON.stringify(updatedData))
        setCartData(updatedData)
    }

    const ItemsSubtotalArray = () => data?.map(item => {
        const price = + item.original_price.split(',').join('')
        return price * (item?.quantity || 1)
    })


    return (
        <AppBar position="fixed" sx={{ backgroundColor: "white", color: "black", height: '3.75rem', px: { md: "3rem" } }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={() => toggleDrawer()}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
                        <Link to="/" >
                            <img src={Logo} alt="" />
                        </Link>
                    </Box>


                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', gap: '.5rem' } }}>
                        {pages.map((page) => (
                            <Button
                                disableRipple
                                disableElevation
                                disableFocusRipple
                                disableTouchRipple
                                key={page}
                                sx={{ my: 2, color: 'black', display: 'block', ":hover": { backgroundColor: "inherit", textDecoration: 'underline' } }}
                            >
                                {
                                    <p style={{ margin: "0" }} onClick={(item) => handleNavigate(page)} >{page}</p>
                                }

                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: "10px" }}>
                        <div className='disable-focus'>
                            <Link to="/login" >
                                <PersonIcon />
                            </Link>
                        </div>
                        <div onClick={() => toggleCart()}>
                            <BasketIcon />
                        </div>
                    </Box>
                    <SwipeableTemporaryDrawer toggleDrawer={() => toggleDrawer()} open={openDrawer}>
                        <div className="mobile-menu-container">
                            <div className="login-btn">
                                <label>
                                    <PersonIcon />
                                    <p>Login</p>
                                </label>
                                <IconButton onClick={() => toggleDrawer()} >
                                    <CloseIcon />
                                </IconButton>
                            </div>
                            <div className="mobile-menu">
                                {
                                    pages.map((item, i) => (
                                        <div className='menu-item' key={i} style={{ cursor: "pointer" }} >
                                            <p onClick={() => handleNavigate(item)}>{item}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </SwipeableTemporaryDrawer>
                    <SwipeableTemporaryDrawer toggleDrawer={() => toggleCart()} open={openCart} anchor='right' >

                        <div className="cart-drawer-header">
                            <p>Cart</p>
                            <IconButton onClick={() => toggleCart()}>
                                <CloseIcon />
                            </IconButton>
                        </div>
                        <div className="cart-drawer-summary">
                            {
                                data?.map((item, i) => (
                                    <SidebarItemcard item={item} key={i} updateLocalStorageData={updateLocalStorageData} />
                                ))
                            }
                        </div>
                        <div className="drawer-subtotal-container">
                            <p className='subtotal-text'>Subtotal</p>
                            <p className='full-total-text'>
                                {`Rs. ${ItemsSubtotalArray()?.reduce((def, curr) => def + curr, 0) || 0}`}
                            </p>
                            <p>Tax included. Shipping calculated at checkout.</p>
                            <p>Orders will be processed in INR.</p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                <Link to="/checkout" style={{ textDecoration: "none" }}>
                                    <Button variant="contained" sx={{ color: "white", fontSize: "12px", padding: " .75rem 2.2rem", backgroundColor: "black", width: "90%", "&:hover": { backgroundColor: "white", color: "black" } }}>CheckOut</Button>
                                </Link>
                                <Link to="/cart" style={{ textDecoration: "none" }}>
                                    <Button variant="contained" sx={{ color: "white", fontSize: "12px", padding: " .75rem 2.2rem", backgroundColor: "black", width: "90%", "&:hover": { backgroundColor: "white", color: "black" } }}>View Cart</Button>
                                </Link>
                            </div>
                        </div>
                    </SwipeableTemporaryDrawer>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
