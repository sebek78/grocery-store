import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { REFRESH_TOKEN_TIME, useContentAreaStyles } from '@constants';
import { Menu } from '@features';
import { Account, Games, ManualPage, NewGame } from '@pages';
import { useAppDispatch, useAppSelector } from '@store';
import { requestRefreshToken, userLogoutRequest } from '@userSlice';
import { Store } from '@pages';
import { IMenuLink } from '@sharedTypes';

export const gameViewMenuLinks: IMenuLink[] = [
    { to: '/game', label: 'Gra' },
    { to: '/game/manual', label: 'Podręcznik' },
    { to: '/game/account', label: 'Konto' },
    {
        label: 'Wyloguj',
        action: userLogoutRequest,
    },
];

const GameView = () => {
    const classes = useContentAreaStyles();
    const dispatch = useAppDispatch();
    const lastUpdateTime = useAppSelector(({ user }) => user.lastUpdateTime);
    const pageReloaded = useAppSelector(({ user }) => user.pageReloaded);

    useEffect(() => {
        if (pageReloaded) dispatch(requestRefreshToken());
    }, []);

    useEffect(() => {
        let id = setTimeout(() => {
            dispatch(requestRefreshToken());
        }, REFRESH_TOKEN_TIME);
        return () => clearTimeout(id);
    }, [lastUpdateTime]);

    return (
        <>
            <Box className={classes.contentArea}>
                <Switch>
                    <Route path="/game/account">
                        <Account />
                    </Route>
                    <Route path="/game/manual">
                        <ManualPage />
                    </Route>
                    <Route path="/game/new">
                        <NewGame />
                    </Route>
                    <Route path="/game/:gameId">
                        <Store />
                    </Route>
                    <Route path="/game">
                        <Games />
                    </Route>
                    <Route path="*">
                        <Games />
                    </Route>
                </Switch>
            </Box>
            <Menu links={gameViewMenuLinks} />
        </>
    );
};

export default GameView;
