import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginDialog from '../LoginDialog';
import RegisterDialog from '../RegisterDialog';
import Header from '../Header';
import Menu from '../Menu';
import { About, Manual } from '@pages';

const Homepage = () => {
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
            <Switch>
                <Route path="/manual">
                    <Manual />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
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
