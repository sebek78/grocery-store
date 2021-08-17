import React, { useState } from 'react';
import LoginDialog from '../LoginDialog/LoginDialog';
import RegisterDialog from '../RegisterDialog/RegisterDialog';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

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
