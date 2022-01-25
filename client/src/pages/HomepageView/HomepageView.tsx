import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useAppSelector } from '@store';
import { LoginDialog, RegisterDialog } from '@features';
import { Menu } from '@features';
import { About, Home, Manual } from '@pages';
import { Box } from '@material-ui/core';
import { useContentAreaStyles } from '@constants';
import { IMenuLink } from '@sharedTypes';

export const homepageMenuLinks: IMenuLink[] = [
    { to: '/', label: 'Strona główna' },
    { to: '/manual', label: 'Podręcznik' },
    { to: '/about', label: 'O projekcie' },
];

const HomepageView = () => {
    const classes = useContentAreaStyles();
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

export default HomepageView;
