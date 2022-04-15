import { Box } from '@mui/material';
import React, { PropsWithChildren } from 'react';

function PageLayout({ children }: PropsWithChildren<unknown>) {
    return (
        <Box
            sx={{
                width: {
                    xs: '100%',
                    lg: 'auto',
                },
                ml: {
                    xs: 0,
                    lg: 30,
                },
            }}
        >
            {children}
        </Box>
    );
}

export default PageLayout;
