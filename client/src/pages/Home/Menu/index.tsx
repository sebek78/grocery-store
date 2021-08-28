import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Divider, Drawer, Grid, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles } from '@material-ui/core/styles';
import MenuLink from '../MenuLink';

type MenuProps = {
    menuOpen: boolean;
    toggleMenu: () => void;
};

const useStyles = makeStyles({
    menu: {
        width: 240,
    },
});

const Menu = ({ menuOpen, toggleMenu }: MenuProps) => {
    const classes = useStyles();

    return (
        <Drawer anchor="left" open={menuOpen} onClose={toggleMenu}>
            <Grid container justifyContent="flex-end" className={classes.menu}>
                <IconButton onClick={toggleMenu}>
                    <ChevronLeftIcon fontSize="large" color="primary" />
                </IconButton>
            </Grid>
            <Divider />
            <MenuLink to="/" label="Strona główna" toggleMenu={toggleMenu} />
            <MenuLink to="/manual" label="Podręcznik" toggleMenu={toggleMenu} />
            <MenuLink to="/about" label="O projekcie" toggleMenu={toggleMenu} />
        </Drawer>
    );
};

export default Menu;
