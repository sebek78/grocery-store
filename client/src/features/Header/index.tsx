import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Grid, Toolbar } from '@material-ui/core';
import { theme } from '@utils';
import MenuAndLogo from './components/MenuAndLogo';
import UserButtons from './components/UserButtons';
import { openMenu } from '../../store/slices/viewsSlice';

const useStyles = makeStyles({
    root: {
        backgroundColor: theme.palette.success.main,
        maxWidth: '100vw',
    },
});

const Header = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleMenuIconClick = () => dispatch(openMenu());

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    wrap="wrap"
                >
                    <MenuAndLogo toggleMenu={handleMenuIconClick} />
                    <UserButtons />
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
