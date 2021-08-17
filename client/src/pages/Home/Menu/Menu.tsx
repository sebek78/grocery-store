import React from 'react';
import { Button, Divider, Drawer, Grid, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles } from '@material-ui/core/styles';

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
            <Button color="primary">O projekcie</Button>
        </Drawer>
    );
};

export default Menu;
