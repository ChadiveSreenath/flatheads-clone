import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SwipeableTemporaryDrawer from './Drawer';
import BasketIcon from '../../Assets/Icons/BasketIcon';
import PersonIcon from '../../Assets/Icons/PersonIcon';
import Logo from "../../Assets/flatheads-logo.webp"
import { Link } from 'react-router-dom';
import './Topbar.css'

const pages = ['Shop', 'Limited Edition(New)', 'Shoes', "Classics", "About", "Help"];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [openDrawer, setOpenDrawer] = React.useState(false)
    const [openCart, setOpenCart] = React.useState(false)
    const toggleDrawer = () => setOpenDrawer(prev => !prev)
    const toggleCart = () => setOpenCart(prev => !prev)



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
                                {page}
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
                    <SwipeableTemporaryDrawer toggleDrawer={() => toggleDrawer()} open={openDrawer} />
                    <SwipeableTemporaryDrawer toggleDrawer={() => toggleCart()} open={openCart} anchor='right' />
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
