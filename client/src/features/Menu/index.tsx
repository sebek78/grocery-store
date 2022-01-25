import React from 'react';
import styled from 'styled-components';
import { Divider, Drawer, Grid, Hidden, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles } from '@material-ui/core/styles';
import MenuLinks from './components/MenuLinks';
import { useAppSelector, useAppDispatch } from '@store';
import { APP_BAR_HEIGHT, DRAWER_WIDTH } from '@constants';
import { closeMenu } from '@viewsSlice';
import { IMenuLink } from '@sharedTypes';

type MenuProps = {
    links: IMenuLink[];
};

const StyledDrawer = styled(Drawer)`
    & .MuiDrawer-paper {
        top: ${APP_BAR_HEIGHT + 1}px;
        width: ${DRAWER_WIDTH}px;
    }
`;

const useStyles = makeStyles({
    drawer: {
        width: DRAWER_WIDTH,
    },
});

const Menu = ({ links }: MenuProps) => {
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
                    <MenuLinks links={links} />
                </Drawer>
            </Hidden>
            <Hidden mdDown>
                <StyledDrawer anchor="left" open variant="permanent">
                    <Divider />
                    <MenuLinks links={links} />
                </StyledDrawer>
            </Hidden>
        </nav>
    );
};

export default Menu;
