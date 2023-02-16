import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MdOutlineDone } from "react-icons/md"
import { Link } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 250,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
};

export default function BasicModal({ open, onClose }) {

    return (
        <div>
            <Modal
                open={open}
                onClose={onClose}
            >
                <Box sx={style} style={{ display: "flex", flexDirection: "column", alignItems: "center", border: 'none !important' }}>
                    <Typography variant="h6" component="h2">
                        {
                            <div className='success-icon'>
                                <MdOutlineDone style={{ fontSize: '2rem' }} width="2em" height="2em" />
                            </div>
                        }
                    </Typography>
                    <Typography sx={{ mt: 2, fontWeight: "600", color: "#212121" }}>
                        Order placed successfully
                    </Typography>
                    <Typography sx={{ mt: 2, fontSize: "14px" }}>
                        Have a nice day
                    </Typography>
                    <Link to="/products"
                        style={{ color: "#fff", background: "#000", padding: "8px 1rem", marginTop: "1rem", textDecoration: "none", borderRadius: '5px' }}
                    >
                        Continue Shopping
                    </Link >
                </Box>
            </Modal>
        </div>
    );
}
