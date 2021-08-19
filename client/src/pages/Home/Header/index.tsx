import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Grid, Toolbar } from '@material-ui/core';
import { theme } from '@utils';
import MenuAndLogo from '../MenuAndLogo';
import UserButtons from '../UserButtons';

type HeaderProps = {
    toggleMenu: () => void;
    handleDialogOpen: (dialog: string) => void;
};

const useStyles = makeStyles({
    root: {
        backgroundColor: theme.palette.success.main,
        maxWidth: '100vw',
    },
});

const Header = ({ toggleMenu, handleDialogOpen }: HeaderProps) => {
    const classes = useStyles();

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
                    <MenuAndLogo toggleMenu={toggleMenu} />
                    <UserButtons handleDialogOpen={handleDialogOpen} />
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
