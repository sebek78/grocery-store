import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface LoaderProps {
    color:
        | 'primary'
        | 'secondary'
        | 'error'
        | 'info'
        | 'success'
        | 'warning'
        | 'inherit';
}

export default function Loader({ color }: LoaderProps) {
    return (
        <Box sx={{ display: 'flex' }} m={2}>
            <CircularProgress color={color} />
        </Box>
    );
}
