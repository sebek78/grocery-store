import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import LoginDialog from './containers/LoginDialog';
import RegisterDialog from './containers/RegisterDialog';
import Header from './containers/Header';
import Menu from './containers/Menu';
import { About, Home, Manual } from '@pages';
import { Box } from '@material-ui/core';
import { theme } from '@utils';
import { drawerWidth } from './constants';

const useStyles = makeStyles({
    contentArea: {
        [theme.breakpoints.up('lg')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
});

const Homepage = () => {
    const classes = useStyles();

    const [menuOpen, setMenu] = useState(false);
    const [loginDialogOpen, setLoginDialogOpen] = useState(false);
    const [registerDialogOpen, setRegisterDialogOpen] = useState(false);

    const toggleMenu = () => setMenu(!menuOpen);
    const handleDialogOpen = (dialog: string) => {
        if (dialog === 'login') setLoginDialogOpen(true);
        if (dialog === 'register') setRegisterDialogOpen(true);
    };
    const handleDialogClose = (dialog: string) => {
        if (dialog === 'login') setLoginDialogOpen(false);
        if (dialog === 'register') setRegisterDialogOpen(false);
    };

    return (
        <>
            <Header
                toggleMenu={toggleMenu}
                handleDialogOpen={handleDialogOpen}
            />
            <Box className={classes.contentArea}>
                <Switch>
                    <Route path="/manual">
                        <Manual />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Box>
            <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />
            <LoginDialog
                open={loginDialogOpen}
                handleClose={handleDialogClose}
            />
            <RegisterDialog
                open={registerDialogOpen}
                handleClose={handleDialogClose}
            />
        </>
    );
};

export default Homepage;
