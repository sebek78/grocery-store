import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '@store';
import { makeStyles } from '@material-ui/core/styles';
import LoginDialog from './containers/LoginDialog';
import RegisterDialog from './containers/RegisterDialog';
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
    const authenticated = useAppSelector(({ user }) => user.authenticated);
    let history = useHistory();

    useEffect(() => {
        if (authenticated) history.push('/game');
    }, [authenticated]);

    return (
        <>
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
            <Menu />
            <LoginDialog />
            <RegisterDialog />
        </>
    );
};

export default Homepage;
