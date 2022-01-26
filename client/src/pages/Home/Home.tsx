import React from 'react';
import { Grid } from '@mui/material';
import { Introduction } from '@features';

const Home = () => {
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ width: 1, marginTop: 8, fontSize: '20px' }}
        >
            <Introduction />
        </Grid>
    );
};

export default Home;
