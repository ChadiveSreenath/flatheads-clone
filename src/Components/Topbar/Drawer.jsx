import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';


export default function SwipeableTemporaryDrawer({ toggleDrawer, open, anchor = 'left' }) {

    return (
        <div>
            <SwipeableDrawer
                anchor={anchor}
                open={open}
                onClose={toggleDrawer}
                onOpen={toggleDrawer}
            >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleDrawer}
                >
                    Hello
                </Box>

            </SwipeableDrawer>
        </div>
    );
}
