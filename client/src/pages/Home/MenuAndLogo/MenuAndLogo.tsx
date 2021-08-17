import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from '@utils';
import { AppBar, Button, Grid, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/menu';
import Logo from '../Logo/Logo';

type MenuAndLogoProps = {
    toggleMenu: () => void;
};

const useStyles = makeStyles({
    menuAndLogo: {
        width: '100vw',
        [theme.breakpoints.up('sm')]: {
            width: 'max-content',
        },
    },
    menuButton: {
        marginRight: theme.spacing(1),
    },
    logo: {
        margin: '0 auto',
        [theme.breakpoints.up('sm')]: {
            margin: 0,
        },
    },
});

const MenuAndLogo = ({ toggleMenu }: MenuAndLogoProps) => {
    const classes = useStyles();

    return (
        <Grid item className={classes.menuAndLogo}>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
            >
                <Grid item>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleMenu}
                    >
                        <MenuIcon fontSize="large" />
                    </IconButton>
                </Grid>
                <Grid item className={classes.logo}>
                    <Logo />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default MenuAndLogo;
