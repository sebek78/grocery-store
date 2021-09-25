import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useAppSelector } from '@store';
import { makeStyles } from '@material-ui/core/styles';
import LoginDialog from './containers/LoginDialog';
import RegisterDialog from './containers/RegisterDialog';
import { Menu } from '@components';
import { About, Home, Manual } from '@pages';
import { Box } from '@material-ui/core';
import { theme } from '@utils';
import { DRAWER_WIDTH } from '@constants';
import { homepageMenuLinks } from './constants';

const useStyles = makeStyles({
    contentArea: {
        [theme.breakpoints.up('lg')]: {
            width: `calc(100% - ${DRAWER_WIDTH}px)`,
            marginLeft: DRAWER_WIDTH,
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
            <Menu links={homepageMenuLinks} />
            <LoginDialog />
            <RegisterDialog />
        </>
    );
};

export default Homepage;
