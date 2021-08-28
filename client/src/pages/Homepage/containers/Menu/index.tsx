import React from 'react';
import styled from 'styled-components';
import { Divider, Drawer, Grid, Hidden, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles } from '@material-ui/core/styles';
import MenuLinks from './components/MenuLinks';
import { theme } from '@utils';
import { appBarHeight, drawerWidth } from '../../constants';

type MenuProps = {
    menuOpen: boolean;
    toggleMenu: () => void;
};

const StyledDrawer = styled(Drawer)`
    & .MuiDrawer-paper {
        top: ${appBarHeight + 1}px;
        width: ${drawerWidth}px;
    }
`;

const useStyles = makeStyles({
    drawer: {
        width: drawerWidth,
    },
});

const Menu = ({ menuOpen, toggleMenu }: MenuProps) => {
    const classes = useStyles();

    return (
        <nav>
            <Hidden lgUp>
                <Drawer
                    anchor="left"
                    open={menuOpen}
                    onClose={toggleMenu}
                    variant="temporary"
                >
                    <Grid
                        container
                        justifyContent="flex-end"
                        className={classes.drawer}
                    >
                        <IconButton onClick={toggleMenu}>
                            <ChevronLeftIcon fontSize="large" color="primary" />
                        </IconButton>
                    </Grid>
                    <Divider />
                    <MenuLinks toggleMenu={toggleMenu} />
                </Drawer>
            </Hidden>
            <Hidden mdDown>
                <StyledDrawer anchor="left" open variant="permanent">
                    <Divider />
                    <MenuLinks toggleMenu={toggleMenu} />
                </StyledDrawer>
            </Hidden>
        </nav>
    );
};

export default Menu;
