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
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Topbar.css'
import SidebarItemcard from './Components/SidebarItemcard';
import CloseIcon from '@mui/icons-material/Close';
import {  db } from "../../Firebase";
import { CartDataContext, UserAuth } from '../../Store/DataContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';

const pages = ['Shop', 'Limited Edition(New)', 'Shoes', "Classics", "About", "Help"];

function ResponsiveAppBar() {
    const [openDrawer, setOpenDrawer] = React.useState(false)
    const { openSideBarCart: openCart, setOpenSideBarCart: setOpenCart } = useContext(CartDataContext)
    const toggleDrawer = () => setOpenDrawer(prev => !prev)
    const toggleCart = () => setOpenCart(prev => !prev)

    const history = useNavigate();

    const handleNavigate = (page) => {
        if (page === "Shoes") {
            history("/shoes")
            window.scroll(0, 0);
        }
        else if (page === "Shop") {
            history("/products")
            window.scroll(0, 0);
        }
        else if (page === "Classics") {
            history("/Collections")
            window.scroll(0, 0);
        }
        else if (page === "Limited Edition(New)") {
            history("/LimitedEdition")
            window.scroll(0, 0);
        }

    }

    const [cartData, setcartData] = useState()

    const { cartData: ProductData } = useContext(CartDataContext)
    const { subTotalPrice } = useContext(CartDataContext)


    const currentUser = UserAuth()

    useEffect(() => {
        onSnapshot(doc(db, "users", `${currentUser?.email}`), (doc) => {
            setcartData(doc?.data()?.cartProducts)
        })
    }, [currentUser?.email])

    const location = useLocation();

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
                            className='bs-none'
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
                        <div onClick={() => {
                            history("/")
                            window.scroll(0, 0)
                        }}
                            style={{ cursor: "pointer" }}
                        >
                            <img src={Logo} alt="" />
                        </div>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', gap: '.5rem' } }}>
                        {pages.map((page) => (
                            <Button
                                className='bs-none'
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

                        {
                            currentUser == null || undefined ?
                                <div className='disable-focus'>
                                    <Link to="/login" >
                                        <PersonIcon />
                                    </Link>
                                </div>
                                :
                                <div className='disable-focus'>
                                    <Link to="/logout" >
                                        <PersonIcon />
                                    </Link>
                                </div>
                        }


                        {
                            location.pathname === "/cart" ?
                                <div onClick={() => toggleCart()} style={{ display: "none" }}>
                                    <BasketIcon />
                                </div>
                                :
                                <div onClick={() => toggleCart()} style={{ display: "flex", alignItems: "center", cursor: "pointer" }} >
                                    <BasketIcon />
                                    <p className='cart-count'>{`${ProductData?.length || 0}`}</p>
                                </div>
                        }

                    </Box>
                    <SwipeableTemporaryDrawer toggleDrawer={() => toggleDrawer()} open={openDrawer}>
                        <div className="mobile-menu-container">
                            <div className="login-btn">
                                <label>
                                    <PersonIcon />
                                    <p>Login</p>
                                </label>
                                <IconButton onClick={() => toggleDrawer()} className='bs-none'>
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

                    <SwipeableTemporaryDrawer toggleDrawer={() => toggleCart()} open={openCart} anchor='right'  >

                        <div className="cart-drawer-header">
                            <p>Cart</p>
                            <IconButton onClick={() => toggleCart()} className='bs-none'>
                                <CloseIcon />
                            </IconButton>
                        </div>
                        <div className="cart-drawer-summary">
                            {
                                cartData?.map((item, i) => (
                                    <SidebarItemcard item={item?.product} key={i} />
                                ))
                            }
                        </div>
                        <div className="drawer-subtotal-container">
                            <p className='subtotal-text'>Subtotal</p>
                            <p className='full-total-text'>
                                {`Rs. ${subTotalPrice || 0}`}
                            </p>
                            <p>Tax included. Shipping calculated at checkout.</p>
                            <p>Orders will be processed in INR.</p>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
                                <Button onClick={() => {
                                    history("/checkout")
                                    window.scrollTo(0, 0)
                                    setOpenCart(false)
                                }} variant="contained" sx={{ color: "white", fontSize: "12px", padding: " .75rem 2.2rem", backgroundColor: "black", width: "90%", "&:hover": { backgroundColor: "white", color: "black" } }}>CheckOut</Button>
                                <Button onClick={() => {
                                    history("/cart")
                                    setOpenCart(false)
                                    window.scrollTo(0, 0)
                                }} variant="contained" sx={{ color: "white", fontSize: "12px", padding: " .75rem 2.2rem", backgroundColor: "black", width: "90%", "&:hover": { backgroundColor: "white", color: "black" } }}>View Cart</Button>
                            </div>
                        </div>
                    </SwipeableTemporaryDrawer>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
