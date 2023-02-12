import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

export default function SwipeableTemporaryDrawer({ toggleDrawer, open, anchor = 'left', children }) {

    return (
        <div>
            <SwipeableDrawer
                anchor={anchor}
                open={open}
                onClose={toggleDrawer}
                onOpen={toggleDrawer}
            >
                <Box
                    sx={{ width: "35vw" }}
                    role="presentation"

                >
                    {children}

                </Box>

            </SwipeableDrawer>
        </div>
    );
}


