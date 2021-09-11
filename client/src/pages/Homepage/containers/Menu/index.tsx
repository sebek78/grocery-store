import React from 'react';
import styled from 'styled-components';
import { Divider, Drawer, Grid, Hidden, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles } from '@material-ui/core/styles';
import MenuLinks from './components/MenuLinks';
import { useAppSelector, useAppDispatch } from '@store';
import { appBarHeight, drawerWidth } from '../../constants';
import { closeMenu } from '@viewsSlice';

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

const Menu = () => {
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const menuOpen = useAppSelector(({ views }) => views.menuOpen);

    const handleOnCloseMenu = () => dispatch(closeMenu());

    return (
        <nav>
            <Hidden lgUp>
                <Drawer
                    anchor="left"
                    open={menuOpen}
                    onClose={handleOnCloseMenu}
                    variant="temporary"
                >
                    <Grid
                        container
                        justifyContent="flex-end"
                        className={classes.drawer}
                    >
                        <IconButton onClick={handleOnCloseMenu}>
                            <ChevronLeftIcon fontSize="large" color="primary" />
                        </IconButton>
                    </Grid>
                    <Divider />
                    <MenuLinks />
                </Drawer>
            </Hidden>
            <Hidden mdDown>
                <StyledDrawer anchor="left" open variant="permanent">
                    <Divider />
                    <MenuLinks />
                </StyledDrawer>
            </Hidden>
        </nav>
    );
};

export default Menu;
