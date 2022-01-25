import React from 'react';
import { useAppSelector } from '@store';
import { Grid } from '@mui/material';
import { Introduction } from '@features';
import { APP_BAR_HEIGHT } from '@constants';

const Home = () => {
    const username = useAppSelector(({ user }) => user.username);
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
