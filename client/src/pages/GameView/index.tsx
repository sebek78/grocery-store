import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { REFRESH_TOKEN_TIME, useContentAreaStyles } from '@constants';
import { Menu } from '@components';
import { gameViewMenuLinks } from './constants';
import { Account, Game, Manual, NewGameForm } from '@pages';
import { useAppDispatch, useAppSelector } from '@store';
import { requestRefreshToken } from '@userSlice';

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
                        <Manual />
                    </Route>
                    <Route path="/game/new">
                        <NewGameForm />
                    </Route>
                    <Route path="/game">
                        <Game />
                    </Route>
                </Switch>
            </Box>
            <Menu links={gameViewMenuLinks} />
        </>
    );
};

export default GameView;
